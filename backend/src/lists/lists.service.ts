import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prismaDB/prisma.service';
import { CreateListDTO } from './dto';
import { Prisma } from '@prisma/client';
import { calculateAvgRating } from 'src/utils/calcutaAvgRating';
import { FilmInListEntity } from 'src/films/entities/';
import {
  InfoListWithAuthorAndFilms,
  ListEntity,
  ShortInfoListWithAuthorAndFilms,
} from './entities';

@Injectable()
export class ListsService {
  constructor(private readonly prisma: PrismaService) {}

  async getLists(): Promise<ShortInfoListWithAuthorAndFilms[]> {
    return await this.prisma.listFilms.findMany({
      where: { private: false },
      include: {
        films: { select: { id: true, posterUrlPreview: true } },
        author: { select: { username: true } },
      },
    });
  }

  async getMyLists(authorId: number): Promise<ShortInfoListWithAuthorAndFilms[]> {
    try {
      return await this.prisma.listFilms.findMany({
        where: { authorId },
        include: {
          films: { select: { id: true, posterUrlPreview: true } },
          author: { select: { username: true } },
        },
      });
    } catch {
      throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getListById(id: number, authorId?: number): Promise<InfoListWithAuthorAndFilms> {
    const list = await this.prisma.listFilms.findUnique({
      where: { id },
      include: {
        films: { include: { ratings: true, countries: true, genres: true } },
        author: { select: { username: true } },
      },
    });

    if (!list || (list.private && authorId !== list.authorId)) {
      throw new HttpException('List not found', HttpStatus.NOT_FOUND);
    }

    return {
      ...list,
      films: list.films.map(
        (film) => new FilmInListEntity({ ...film, avgRating: calculateAvgRating(film.ratings) }),
      ),
    };
  }

  async createList(authorId: number, dto: CreateListDTO): Promise<ListEntity> {
    try {
      return await this.prisma.listFilms.create({
        data: { ...dto, authorId },
      });
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'P2002') {
          throw new HttpException(
            `List with name (${dto.name}) already exists`,
            HttpStatus.CONFLICT,
          );
        }
      }
      throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async removeList(authorId: number, id: number): Promise<void> {
    try {
      await this.prisma.listFilms.delete({ where: { id, authorId } });
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'P2025') {
          throw new HttpException('List not found', HttpStatus.NOT_FOUND);
        }
        throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }

  async addFilmToList(authorId: number, id: number, filmId: number): Promise<FilmInListEntity> {
    try {
      await this.prisma.listFilms.update({
        where: { id, authorId },
        data: { films: { connect: { id: filmId } } },
        select: { films: true },
      });

      const film = await this.prisma.film.findUnique({ where: { id: filmId } });
      return new FilmInListEntity(film);
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        switch (err.code) {
          case 'P2016':
            throw new HttpException('You have not access to this list', HttpStatus.FORBIDDEN);
          case 'P2025':
            throw new HttpException('Film not found', HttpStatus.NOT_FOUND);
        }
      }

      throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async removeFilmFromList(authorId: number, id: number, filmId: number): Promise<void> {
    try {
      await this.prisma.listFilms.update({
        where: { id, authorId },
        data: { films: { disconnect: { id: filmId } } },
        select: { films: true, name: true, id: true },
      });
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'P2025') {
          throw new HttpException('You have not access to this list', HttpStatus.FORBIDDEN);
        }
      }
      throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async changeVisibility(authorId: number, id: number, isPrivate: boolean): Promise<ListEntity> {
    try {
      const list = await this.prisma.listFilms.update({
        where: { id, authorId },
        data: { private: isPrivate },
      });

      return new ListEntity(list);
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'P2025') {
          throw new HttpException('List not found', HttpStatus.NOT_FOUND);
        }
      }
      throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
