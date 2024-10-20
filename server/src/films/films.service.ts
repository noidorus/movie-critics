import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prismaDB/prisma.service';
import { items } from './seed';
import { FilmWithRealtions, VideoTypesArr } from './films.interfaces';
import { FiltersEntity, FilmEntity, FilmsEntity } from './entities';

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
    } catch (err) {
      console.error(err);
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
    } catch (err) {
      console.error(err);
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
    } catch (err) {
      console.error(err);
      throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async seeding() {
    const filmsPromises = items.map(async (item) => {
      const { countries, genres, ...rest } = item;

      const countriesIds = await this.upsertCountries(countries);
      const genresIds = await this.upsertGenres(genres);
      return await this.prisma.film.upsert({
        where: { kpId: rest.kpId },
        create: { ...rest, countries: { connect: countriesIds }, genres: { connect: genresIds } },
        update: {},
      });
    });

    return await Promise.all(filmsPromises);
  }

  private async upsertCountries(name: string[]) {
    return Promise.all(
      name.map((name) =>
        this.prisma.country.upsert({ where: { name }, create: { name }, update: {} }),
      ),
    );
  }

  private upsertGenres(name: string[]) {
    return Promise.all(
      name.map((name) =>
        this.prisma.genre.upsert({ where: { name }, create: { name }, update: {} }),
      ),
    );
  }
}
