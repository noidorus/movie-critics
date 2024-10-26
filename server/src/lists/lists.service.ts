import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prismaDB/prisma.service';
import { CreateListDTO, ChangeListVisibilityDTO } from './dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class ListsService {
  constructor(private readonly prisma: PrismaService) {}

  async getLists() {
    const lists = await this.prisma.listFilms.findMany({ where: { private: false } });
    return lists;
  }

  async getListById(id: number, authorId?: number) {
    const list = await this.prisma.listFilms.findUnique({
      where: { id },
      include: {
        films: {
          select: {
            id: true,
            nameOriginal: true,
            nameRu: true,
            year: true,
            posterUrlPreview: true,
            filmLength: true,
            countries: { select: { name: true } },
            genres: { select: { name: true } },
            ratings: { select: { userRating: true } },
            type: true,
          },
        },
      },
    });

    if (!list || (list.private && authorId !== list.authorId)) {
      throw new HttpException('List not found', HttpStatus.NOT_FOUND);
    }

    return list;
  }
  async createList(authorId: number, dto: CreateListDTO) {
    try {
      const list = await this.prisma.listFilms.create({
        data: { ...dto, authorId },
        include: { films: true },
      });

      return list;
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'P2002') {
          throw new HttpException(
            `List with name "${dto.name}" already exists`,
            HttpStatus.CONFLICT,
          );
        }

        throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }

  async changeVisibility(authorId: number, dto: ChangeListVisibilityDTO) {
    try {
      const list = await this.prisma.listFilms.update({
        where: { id: dto.id, authorId },
        data: { private: dto.private },
      });

      return list;
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'P2025') {
          throw new HttpException('List not found', HttpStatus.NOT_FOUND);
        }
        throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }
}
