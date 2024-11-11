import { Exclude, Transform } from 'class-transformer';
import { Country, Film, Genre, Rating, VideoType } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class ShortInfoFilmEntity implements Film {
  constructor(partial: Partial<ShortInfoFilmEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty({ example: '1282979' })
  id: number;

  @ApiProperty({ example: 'LEGO Ниндзяго', nullable: true })
  nameRu: string | null;

  @ApiProperty({ example: 'Ninjago', nullable: true })
  nameOriginal: string | null;

  @ApiProperty({ example: 11 })
  filmLength: number;

  @ApiProperty({ example: 2019 })
  year: number;

  @ApiProperty({
    example:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F1282979.jpg?alt=media&token=55cb779b-50d7-46ec-8a6e-2cf0b52d22ad',
  })
  posterUrlPreview: string;

  @ApiProperty({ example: 'TV_SERIES', enum: VideoType })
  type: VideoType;

  @ApiProperty({ example: [{ name: 'США' }, { name: 'Канада' }, { name: 'Дания' }] })
  @Transform(({ value }) => value.map(({ name }: Country) => ({ name })))
  countries: Country[];

  @ApiProperty({ example: [{ name: 'семейный' }, { name: 'детский' }] })
  @Transform(({ value }) => value.map(({ name }: Genre) => ({ name })))
  genres: Genre[];

  @ApiProperty({ example: 8 })
  avgRating: number;

  @Exclude()
  ratings: Rating[];

  @Exclude()
  kpId: string;

  @Exclude()
  slogan: string;

  @Exclude()
  description: string;

  @Exclude()
  shortDescription: string;

  @Exclude()
  posterUrl: string;

  @Exclude()
  createdAt: Date;
}
