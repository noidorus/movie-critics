import { ApiProperty } from '@nestjs/swagger';
import { ListFilms } from '@prisma/client';

export class ListEntity implements ListFilms {
  constructor(partial: Partial<ListEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'My list' })
  name: string;

  @ApiProperty({ example: false })
  private: boolean;

  @ApiProperty({ example: 1 })
  authorId: number;

  @ApiProperty({ example: new Date() })
  createdAt: Date;

  @ApiProperty({ example: new Date() })
  updatedAt: Date;
}
