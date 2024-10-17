import { ApiProperty } from '@nestjs/swagger';
import { Filters } from 'src/firebase/firebase.interface';

export class FiltersResponseDTO implements Filters {
  @ApiProperty({ example: ['США', 'Канада', 'Дания'] })
  countries: string[];

  @ApiProperty({ example: ['приключения', 'боевик', 'мультфильм', 'семейный', 'детский'] })
  genres: string[];

  @ApiProperty({
    example: ['VIDEO', 'FILM', 'MINI_SERIES', 'TV_SERIES', 'TV_SHOW'],
  })
  types: ['VIDEO', 'FILM', 'MINI_SERIES', 'TV_SERIES', 'TV_SHOW'];
}
