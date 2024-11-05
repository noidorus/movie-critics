import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prismaDB/prisma.service';
import { items } from './seed';
import { FilmWithRealtions, VideoTypesArr } from './film.interfaces';
import { FiltersEntity, FilmsEntity, FilmWithExtrasEntity, FilmNoRatingsEntity } from './entities';
import { Country, Genre, Rating } from '@prisma/client';
import { OmdbService } from '../omdb/omdb.service';
import { calculateAvgRating } from 'src/utils/calcutaAvgRating';

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
        items: items.map((item) => new FilmNoRatingsEntity(item)),
      });
    } catch {
      throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getFilmById(id: number): Promise<FilmWithExtrasEntity> {
    try {
      const film: FilmWithRealtions = await this.prisma.film.findUnique({
        where: { id },
        include: { genres: true, countries: true, ratings: true },
      });

      const { plot, ...extraInfo } = await this.omdbService.getFilmByTitle(film.nameOriginal);

      return new FilmWithExtrasEntity({
        ...film,
        avgRating: calculateAvgRating(film.ratings),
        description: film.description || plot,
        ...extraInfo,
      });
    } catch {
      throw new HttpException('Film not found', HttpStatus.NOT_FOUND);
    }
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

  async rateFilm(userId: number, filmId: number, rating: number): Promise<Rating> {
    try {
      const film = await this.prisma.film.findUnique({ where: { id: filmId } });

      if (!film) {
        throw new HttpException('Film not found', HttpStatus.NOT_FOUND);
      }

      return await this.prisma.rating.upsert({
        where: { filmId_userId: { filmId, userId } },
        create: { filmId, userId, userRating: rating },
        update: { userRating: rating },
      });
    } catch (err) {
      throw err;
    }
  }

  async getCommentsByFilmId(filmId: number) {
    try {
      return await this.prisma.comment.findMany({ where: { filmId } });
    } catch {
      throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
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
