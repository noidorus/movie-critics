import { ApiProperty } from '@nestjs/swagger';
import { Film, ItemType } from 'src/types/firebase.types';

export class FilmResponseDTO implements Film {
  @ApiProperty({ example: '1282979' })
  id: string;

  @ApiProperty({ example: 'LEGO Ниндзяго', nullable: true })
  nameRu: string | null;

  @ApiProperty({ example: null, nullable: true })
  nameEn: string | null;

  @ApiProperty({ example: 'Ninjago', nullable: true })
  nameOriginal: string | null;

  @ApiProperty({ example: 2019 })
  year: number;

  @ApiProperty({ example: 'TV_SERIES', enum: ItemType })
  type: ItemType;

  @ApiProperty({ example: 11 })
  filmLentgh: number;

  @ApiProperty({ example: ['США', 'Канада', 'Дания'] })
  countries: string[];

  @ApiProperty({ example: ['приключения', 'боевик', 'мультфильм', 'семейный', 'детский'] })
  genres: string[];

  @ApiProperty({ example: "It's all fun and games until you reach Level 13." })
  slogan: string;

  @ApiProperty({
    example:
      'Заскучавшие ниндзя случайно выпускают из заточения опасную злодейку. Продолжение сериала про мастеров Кружитцу',
  })
  shortDescription: string;

  @ApiProperty({
    example:
      'Ниндзя сражаются со злодеями в Ниндзяго-Сити и за его пределами, отправляются на новые задания и обретают союзников, а их дружба проходит проверку на прочность.',
  })
  description: string;

  @ApiProperty({
    example:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F1282979.jpg?alt=media&token=73405de1-b744-44ae-b311-27aa5beb1b6b',
  })
  posterUrl: string;

  @ApiProperty({
    example:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F1282979.jpg?alt=media&token=55cb779b-50d7-46ec-8a6e-2cf0b52d22ad',
  })
  posterUrlPreview: string;
}
