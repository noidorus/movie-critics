import { ApiProperty } from '@nestjs/swagger';
import { FilmEntity } from './film.entity';
import { Transform } from 'class-transformer';

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

  @ApiProperty({
    example: [
      {
        id: 76,
        nameRu: 'LEGO Ниндзяго',
        nameOriginal: 'Ninjago',
        slogan: "It's all fun and games until you reach Level 13.",
        description:
          'Ниндзя сражаются со злодеями в Ниндзяго-Сити и за его пределами, отправляются на новые задания и обретают союзников, а их дружба проходит проверку на прочность.',
        shortDescription:
          'Заскучавшие ниндзя случайно выпускают из заточения опасную злодейку. Продолжение сериала про мастеров Кружитцу',
        filmLength: 11,
        year: 2019,
        posterUrl:
          'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F1282979.jpg?alt=media&token=73405de1-b744-44ae-b311-27aa5beb1b6b',
        posterUrlPreview:
          'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F1282979.jpg?alt=media&token=55cb779b-50d7-46ec-8a6e-2cf0b52d22ad',
        type: 'TV_SERIES',
        countries: ['США', 'Канада', 'Дания'],
        genres: ['приключения', 'боевик', 'мультфильм', 'семейный', 'детский'],
        avgRating: 8,
      },
    ],
    type: [FilmEntity],
  })
  @Transform(({ value }) => value.map((item: FilmEntity) => new FilmEntity(item)))
  items: FilmEntity[];
}
