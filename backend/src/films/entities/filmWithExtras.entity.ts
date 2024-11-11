import { ApiProperty } from '@nestjs/swagger';
import { FilmEntity } from './film.entity';

export class FilmWithExtrasEntity extends FilmEntity {
  @ApiProperty({ example: '$ 1,000,000', nullable: true })
  boxOffice: string | null;

  @ApiProperty({ example: '3 wins', nullable: true })
  awards: string | null;
}
