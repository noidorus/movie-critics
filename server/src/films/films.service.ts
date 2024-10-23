import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prismaDB/prisma.service';
import { items } from './seed';
import { FilmWithRealtions, VideoTypesArr } from './films.interfaces';
import { FiltersEntity, FilmEntity, FilmsEntity } from './entities';
import { Country, Genre } from '@prisma/client';

@Injectable()
export class FilmsService {
  constructor(private readonly prisma: PrismaService) {}

  async getFilms(page: number, limit: number): Promise<FilmsEntity> {
    try {
      const items: FilmWithRealtions[] = await this.prisma.film.findMany({
        take: limit,
        skip: (page - 1) * limit,
        include: { genres: true, countries: true, ratings: true },
      });

      const totalItems = await this.prisma.film.count();

      return {
        page,
        totalPages: Math.ceil(totalItems / limit),
        totalItems,
        items: items.map((item) => new FilmEntity(this.getFilmWithAvg(item))),
      };
    } catch {
      throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  private getFilmWithAvg(film: FilmWithRealtions): FilmEntity {
    const ratings = film.ratings;
    return {
      ...film,
      avgRating: ratings.reduce((acc, { userRating }) => acc + userRating, 0) / ratings.length,
    };
  }

  async getFilmById(id: number): Promise<FilmEntity> {
    try {
      const film: FilmWithRealtions = await this.prisma.film.findUnique({
        where: { id },
        include: { genres: true, countries: true, ratings: true },
      });

      if (!film) {
        throw new HttpException('Film not found', HttpStatus.NOT_FOUND);
      }

      return new FilmEntity(this.getFilmWithAvg(film));
    } catch {
      throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
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
