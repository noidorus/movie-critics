import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prismaDB/prisma.service';
import { items } from './seed';
import { FilmWithRealtions, VideoTypesArr } from './film.interfaces';
import { FiltersEntity, FilmsEntity, FilmWithExtrasEntity } from './entities';
import { Country, Genre } from '@prisma/client';
import { OmdbService } from '../omdb/omdb.service';
import { RateFilmBodyDTO } from './dto/RateFilmBody.dto';

@Injectable()
export class FilmsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly omdbService: OmdbService,
  ) {}

  async getFilms(page: number, limit: number): Promise<FilmsEntity> {
    try {
      const items: FilmWithRealtions[] = await this.prisma.film.findMany({
        take: limit,
        skip: (page - 1) * limit,
        include: { genres: true, countries: true, ratings: true },
      });

      const totalItems = await this.prisma.film.count();

      return new FilmsEntity({
        page,
        totalPages: Math.ceil(totalItems / limit),
        totalItems,
        items: items.map((item) => this.getFilmWithAvg(item)),
      });
    } catch {
      throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getFilmById(id: number) {
    try {
      const film: FilmWithRealtions = await this.prisma.film.findUnique({
        where: { id },
        include: { genres: true, countries: true, ratings: true },
      });

      if (!film) {
        throw new HttpException('Film not found', HttpStatus.NOT_FOUND);
      }

      const { plot, ...extraInfo } = await this.omdbService.getFilmByTitle(film.nameOriginal);

      return new FilmWithExtrasEntity({
        ...this.getFilmWithAvg(film),
        description: film.description || plot,
        ...extraInfo,
      });
    } catch {
      throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  private getFilmWithAvg(film: FilmWithRealtions) {
    const ratings = film.ratings;
    return {
      ...film,
      avgRating: ratings.reduce((acc, { userRating }) => acc + userRating, 0) / ratings.length,
    };
  }

  async getFilters(): Promise<FiltersEntity> {
    try {
      const types: VideoTypesArr = ['VIDEO', 'FILM', 'MINI_SERIES', 'TV_SERIES', 'TV_SHOW'];
      const filters = {
        genres: await this.prisma.genre.findMany(),
        countries: await this.prisma.country.findMany(),
        types,
      };

      return new FiltersEntity(filters);
    } catch {
      throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async rateFilm(dto: RateFilmBodyDTO, userId: number) {
    try {
      const film = await this.prisma.film.findUnique({ where: { id: dto.filmId } });

      if (!film) {
        throw new HttpException('Film not found', HttpStatus.NOT_FOUND);
      }

      const rating = await this.prisma.rating.upsert({
        where: { filmId_userId: { filmId: dto.filmId, userId } },
        create: { filmId: dto.filmId, userId, userRating: dto.rating },
        update: { userRating: dto.rating },
      });

      return rating;
    } catch (err) {
      throw err;
    }
  }

  async seeding() {
    const films = [];
    for (const item of items) {
      const { countries, genres, ...rest } = item;

      const countriesIds = await this.upsertFilters(countries, (obj) => {
        return this.prisma.country.upsert(obj);
      });

      const genresIds = await this.upsertFilters(genres, (obj) => {
        return this.prisma.genre.upsert(obj);
      });

      const film = await this.prisma.film.upsert({
        where: { kpId: rest.kpId },
        create: { ...rest, countries: { connect: countriesIds }, genres: { connect: genresIds } },
        update: {},
      });

      films.push(film);
    }

    return films;
  }

  private async upsertFilters<T extends Country | Genre>(
    names: string[],
    upsertCallback: (obj: UpsertFilterObj) => Promise<T>,
  ) {
    const filters: T[] = [];
    for (const name of names) {
      const filter = await upsertCallback({ where: { name }, create: { name }, update: {} });
      filters.push(filter);
    }

    return filters;
  }
}
interface UpsertFilterObj {
  where: { name: string };
  create: { name: string };
  update: object;
}
