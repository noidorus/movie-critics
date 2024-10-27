import { Exclude } from 'class-transformer';
import { FilmNoRatingsEntity } from './filmNoRatings.entity';

export class FilmInListEntity extends FilmNoRatingsEntity {
  @Exclude()
  description: string;

  @Exclude()
  shortDescription: string;

  @Exclude()
  slogan: string;

  @Exclude()
  posterUrl: string;

  @Exclude()
  createdAt: Date;
}
