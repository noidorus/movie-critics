import { Country, Film, Genre, Rating } from '@prisma/client';

export interface FilmWithRealtions extends Film {
  countries: Country[];
  genres: Genre[];
  ratings: Rating[];
  type: 'VIDEO' | 'FILM' | 'MINI_SERIES' | 'TV_SERIES' | 'TV_SHOW';
}

export type VideoTypesArr = ['VIDEO', 'FILM', 'MINI_SERIES', 'TV_SERIES', 'TV_SHOW'];
