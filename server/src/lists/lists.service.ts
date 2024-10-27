import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prismaDB/prisma.service';
import { CreateListDTO, ChangeListVisibilityDTO } from './dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class ListsService {
  constructor(private readonly prisma: PrismaService) {}

  async getLists() {
    return await this.prisma.listFilms.findMany({ where: { private: false } });
  }

  async getListById(id: number, authorId?: number) {
    const list = await this.prisma.listFilms.findUnique({
      where: { id },
      include: {
        films: { include: { ratings: true, countries: true, genres: true } },
      },
    });

    if (!list || (list.private && authorId !== list.authorId)) {
      throw new HttpException('List not found', HttpStatus.NOT_FOUND);
    }

    return list;
  }

  async getMyLists(authorId: number) {
    try {
      return await this.prisma.listFilms.findMany({
        where: { authorId },
        include: {
          films: { include: { ratings: true, countries: true, genres: true } },
        },
      });
    } catch {
      throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async createList(authorId: number, dto: CreateListDTO) {
    try {
      return await this.prisma.listFilms.create({
        data: { ...dto, authorId },
        include: { films: true },
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

  async removeList(authorId: number, id: number) {
    try {
      await this.prisma.listFilms.delete({ where: { id, authorId } });
      throw new HttpException('List deleted', HttpStatus.OK);
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'P2025') {
          throw new HttpException('List not found', HttpStatus.NOT_FOUND);
        }
        throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }

  async addFilmToList(authorId: number, id: number, filmId: number) {
    try {
      return await this.prisma.listFilms.update({
        where: { id, authorId },
        data: { films: { connect: { id: filmId } } },
        include: { films: true },
      });
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

  async removeFilmFromList(authorId: number, id: number, filmId: number) {
    try {
      await this.prisma.listFilms.update({
        where: { id, authorId },
        data: { films: { disconnect: { id: filmId } } },
        include: { films: true },
      });

      throw new HttpException('Film removed from list', HttpStatus.OK);
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'P2025') {
          throw new HttpException('You have not access to this list', HttpStatus.FORBIDDEN);
        }
      }
      throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async changeVisibility(authorId: number, dto: ChangeListVisibilityDTO) {
    try {
      return await this.prisma.listFilms.update({
        where: { id: dto.id, authorId },
        data: { private: dto.private },
      });
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
