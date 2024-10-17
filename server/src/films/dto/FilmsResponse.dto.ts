import { ApiProperty } from '@nestjs/swagger';
import { FilmResponseDTO } from './FilmResponse.dto';
import { FilmsResponse } from 'src/firebase/firebase.interface';

export class FilmsResponseDTO implements FilmsResponse {
  @ApiProperty({ example: 80 })
  total: number;

  @ApiProperty({ example: 8 })
  totalPages: number;

  @ApiProperty({ example: 1 })
  page: number;

  @ApiProperty({
    example: [
      {
        id: '1282979',
        nameRu: 'LEGO Ниндзяго',
        nameEn: null,
        nameOriginal: 'Ninjago',
        year: 2019,
        type: 'TV_SERIES',
        filmLentgh: 11,
        countries: ['США', 'Канада', 'Дания'],
        genres: ['приключения', 'боевик', 'мультфильм', 'семейный', 'детский'],
        slogan: "It's all fun and games until you reach Level 13.",
        shortDescription:
          'Заскучавшие ниндзя случайно выпускают из заточения опасную злодейку. Продолжение сериала про мастеров Кружитцу',
        description:
          'Ниндзя сражаются со злодеями в Ниндзяго-Сити и за его пределами, отправляются на новые задания и обретают союзников, а их дружба проходит проверку на прочность.',
        posterUrl:
          'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F1282979.jpg?alt=media&token=73405de1-b744-44ae-b311-27aa5beb1b6b',
        posterUrlPreview:
          'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F1282979.jpg?alt=media&token=55cb779b-50d7-46ec-8a6e-2cf0b52d22ad',
      },
    ],
    type: [FilmResponseDTO],
  })
  items: FilmResponseDTO[];
}
