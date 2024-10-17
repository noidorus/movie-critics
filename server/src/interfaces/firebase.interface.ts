export interface Film {
  id: string;
  nameRu: string | null;
  nameEn: string | null;
  nameOriginal: string | null;
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

export interface Filters {
  countries: string[];
  genres: string[];
  types: ['VIDEO', 'FILM', 'MINI_SERIES', 'TV_SERIES', 'TV_SHOW'];
}

export interface FilmsResponse {
  items: Film[];
  total: number;
  totalPages: number;
  page: number;
}

export enum ItemType {
  VIDEO = 'VIEDO',
  FILM = 'FILM',
  MINI_SERIES = 'MINI_SERIES',
  TV_SERIES = 'TV_SERIES',
  TV_SHOW = 'TV_SHOW',
}
