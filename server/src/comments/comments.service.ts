import { PrismaService } from 'src/prismaDB/prisma.service';
import { CreateCommentDTO, EditCommentDTO } from './dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class CommentsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(authorId: number, dto: CreateCommentDTO) {
    try {
      return await this.prisma.comment.create({ data: { ...dto, authorId } });
    } catch {
      throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async delete(authorId: number, id: number) {
    try {
      await this.prisma.comment.delete({ where: { id, authorId } });
      return true;
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'P2025') {
          throw new HttpException('Comment not found', HttpStatus.NOT_FOUND);
        }
      }
      throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async edit(authorId: number, id: number, dto: EditCommentDTO) {
    try {
      await this.prisma.comment.update({ where: { id, authorId }, data: { ...dto } });
      throw new HttpException('Comment edited', HttpStatus.OK);
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'P2025') {
          throw new HttpException('Comment not found', HttpStatus.NOT_FOUND);
        }
      }
      throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getCommentsByFilmId(filmId: number) {
    try {
      return await this.prisma.comment.findMany({ where: { filmId } });
    } catch {
      throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
