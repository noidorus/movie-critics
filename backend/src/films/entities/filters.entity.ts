import { ApiProperty } from '@nestjs/swagger';
import { Country, Genre } from '@prisma/client';
import { Transform } from 'class-transformer';
import { VideoTypesArr } from '../film.interfaces';

export class FiltersEntity {
  constructor(partial: Partial<FiltersEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty({ example: ['США', 'Канада', 'Дания'] })
  @Transform(({ value }) => value.map((item: Country) => item.name))
  countries: Country[];

  @ApiProperty({ example: ['приключения', 'боевик', 'мультфильм', 'семейный', 'детский'] })
  @Transform(({ value }) => value.map((item: Genre) => item.name))
  genres: Genre[];

  @ApiProperty({
    example: ['VIDEO', 'FILM', 'MINI_SERIES', 'TV_SERIES', 'TV_SHOW'],
  })
  types: VideoTypesArr;
}
