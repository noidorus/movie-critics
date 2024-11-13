import { ApiProperty } from '@nestjs/swagger';
import { FilmEntity } from './film.entity';
import { Rating } from '@prisma/client';

export class FilmWithExtrasEntity extends FilmEntity {
  @ApiProperty({ example: '$ 1,000,000', nullable: true })
  boxOffice: string | null;

  @ApiProperty({ example: '3 wins', nullable: true })
  awards: string | null;

  @ApiProperty({ example: 'Kazumi Evans, Sabrina Pitre, Rebecca Shoichet', nullable: true })
  actors: string | null;

  @ApiProperty({ example: [{ id: 1, userRating: 6, userId: 1, filmId: 1 }] })
  ratings: Rating[];
}
