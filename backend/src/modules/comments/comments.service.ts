import { PrismaService } from 'src/prismaDB/prisma.service';
import { CreateCommentDTO } from './dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CommentEntity } from './comment.entity';

@Injectable()
export class CommentsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(authorId: number, dto: CreateCommentDTO): Promise<CommentEntity> {
    try {
      return await this.prisma.comment.create({
        data: { ...dto, authorId },
        include: { author: { select: { username: true, id: true } } },
      });
    } catch {
      throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async delete(authorId: number, id: number): Promise<void> {
    try {
      await this.prisma.comment.delete({ where: { authorId, id } });
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === 'P2025') {
        throw new HttpException('Comment not found', HttpStatus.NOT_FOUND);
      }
      throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async edit(authorId: number, id: number, text: string): Promise<CommentEntity> {
    try {
      const comment = await this.prisma.comment.findUnique({
        where: { id, authorId },
        include: { author: { select: { username: true, id: true } } },
      });

      if (!comment) {
        throw new HttpException('Comment not found', HttpStatus.NOT_FOUND);
      }

      if (comment.text === text) {
        return comment;
      }

      return await this.prisma.comment.update({
        where: { id, authorId },
        data: { text },
        include: { author: { select: { username: true, id: true } } },
      });
    } catch (err) {
      if (err instanceof HttpException && err.getStatus() === 404) {
        throw err;
      }
      throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
