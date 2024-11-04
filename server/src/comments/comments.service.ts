import { PrismaService } from 'src/prismaDB/prisma.service';
import { CreateCommentDTO, EditCommentDTO } from './dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CommentEntity } from './comment.entity';

@Injectable()
export class CommentsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(authorId: number, dto: CreateCommentDTO) {
    try {
      const comment = await this.prisma.comment.create({ data: { ...dto, authorId } });
      return new CommentEntity(comment);
    } catch {
      throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async delete(authorId: number, id: number): Promise<true> {
    try {
      await this.prisma.comment.delete({ where: { authorId, id } });
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
      const comment = await this.prisma.comment.update({
        where: { id, authorId },
        data: { ...dto },
      });
      return new CommentEntity(comment);
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'P2025') {
          throw new HttpException('Comment not found', HttpStatus.NOT_FOUND);
        }
      }
      throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
