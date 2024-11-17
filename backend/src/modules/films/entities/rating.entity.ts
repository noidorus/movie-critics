import { ApiProperty } from '@nestjs/swagger';
import { Rating } from '@prisma/client';

export class RatingEntity implements Rating {
  constructor(partial: Partial<RatingEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 1 })
  filmId: number;

  @ApiProperty({ example: 1 })
  userId: number;

  @ApiProperty({ example: 5 })
  userRating: number;
}
