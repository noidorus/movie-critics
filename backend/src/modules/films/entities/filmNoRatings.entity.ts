import { Rating } from '@prisma/client';
import { FilmEntity } from './film.entity';
import { Exclude } from 'class-transformer';

export class FilmNoRatingsEntity extends FilmEntity {
  @Exclude()
  ratings: Rating[];
}
