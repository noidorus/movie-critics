import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prismaDB/prisma.service';
import { FilmsEntity, FilmWithExtrasEntity, FilmNoRatingsEntity } from './entities';
import { Rating } from '@prisma/client';
import { OmdbService } from '../omdb/omdb.service';
import { calculateAvgRating } from 'src/utils/calcutaAvgRating';
import { CommentEntity } from 'src/comments/comment.entity';

@Injectable()
export class FilmsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly omdbService: OmdbService,
  ) {}

  async getFilms(page: number, limit: number): Promise<FilmsEntity> {
    try {
      const items = await this.prisma.film.findMany({
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
      const film = await this.prisma.film.findUnique({
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

  async getCommentsByFilmId(filmId: number): Promise<CommentEntity[]> {
    try {
      return await this.prisma.comment.findMany({
        where: { filmId },
        include: { author: { select: { username: true, id: true } } },
      });
    } catch {
      throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
