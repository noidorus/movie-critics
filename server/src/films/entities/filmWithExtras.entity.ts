import { ApiProperty } from '@nestjs/swagger';
import { Country, Film, Genre, Rating, VideoType } from '@prisma/client';
import { Exclude, Transform } from 'class-transformer';

export class FilmWithExtrasEntity implements Film {
  constructor(partial: Partial<FilmWithExtrasEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty({ example: '1282979' })
  id: number;

  @Exclude()
  kpId: string;

  @ApiProperty({ example: 'LEGO Ниндзяго', nullable: true })
  nameRu: string | null;

  @ApiProperty({ example: 'Ninjago', nullable: true })
  nameOriginal: string | null;

  @ApiProperty({ example: "It's all fun and games until you reach Level 13." })
  slogan: string;

  @ApiProperty({
    example:
      'Ниндзя сражаются со злодеями в Ниндзяго-Сити и за его пределами, отправляются на новые задания и обретают союзников, а их дружба проходит проверку на прочность.',
  })
  description: string;

  @ApiProperty({
    example:
      'Заскучавшие ниндзя случайно выпускают из заточения опасную злодейку. Продолжение сериала про мастеров Кружитцу',
  })
  shortDescription: string;

  @ApiProperty({ example: 11 })
  filmLength: number;

  @ApiProperty({ example: 2019 })
  year: number;

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

  @ApiProperty({ example: 'TV_SERIES', enum: VideoType })
  type: VideoType;

  @ApiProperty({ example: ['США', 'Канада', 'Дания'] })
  @Transform(({ value }) => value.map((item: Country) => item.name))
  countries: Country[];

  @ApiProperty({ example: ['приключения', 'боевик', 'мультфильм', 'семейный', 'детский'] })
  @Transform(({ value }) => value.map((item: Genre) => item.name))
  genres: Genre[];

  ratings: Rating[];

  @ApiProperty({ example: 8, nullable: true })
  avgRating: number | null;

  @ApiProperty({ example: '$ 1,000,000', nullable: true })
  boxOffice: string | null;

  @ApiProperty({ example: '3 wins', nullable: true })
  awards: string | null;
}