import { ItemType } from './kinopoisk.types';

export interface IFilm extends FilmInsctance {
  countries: string[];
  genres: string[];
  year: number;
  type: ItemType;
  posterUrl: string;
  posterUrlPreview: string;
  filmLentgh: number;
  slogan: string;
  description: string;
  shortDescription: string;
}

export interface FilmInsctance {
  id: string;
  nameRu: string | null;
  nameEn: string | null;
  nameOriginal: string | null;
}
