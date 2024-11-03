import { ApiProperty } from '@nestjs/swagger';
import { Comment } from '@prisma/client';

export class CommentEntity implements Comment {
  constructor(partial: Partial<CommentEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'text' })
  text: string;

  @ApiProperty({ example: 1 })
  authorId: number;

  @ApiProperty({ example: 1 })
  filmId: number;

  @ApiProperty({ example: new Date() })
  createdAt: Date;

  @ApiProperty({ example: new Date() })
  updatedAt: Date;
}
