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
  [key: string]: string[];
}
export interface FilmsResponse {
  items: Film[];
  total: number;
  totalPages: number;
  page: number;
}

export type ItemType = 'VIEDO' | 'FILM' | 'MINI_SERIES' | 'TV_SERIES';
