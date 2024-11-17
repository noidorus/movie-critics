import { ApiProperty } from '@nestjs/swagger';
import { FilmNoRatingsEntity } from './filmNoRatings.entity';
export class FilmsEntity {
  constructor(partial: Partial<FilmsEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty({ example: 80 })
  totalItems: number;

  @ApiProperty({ example: 8 })
  totalPages: number;

  @ApiProperty({ example: 1 })
  page: number;

  @ApiProperty({ type: [FilmNoRatingsEntity] })
  items: FilmNoRatingsEntity[];
}
