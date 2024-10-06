export interface KinopoiskSingleFilm {
  kinopoiskId: number;
  kinopoiskHDId: string;
  imdbId: string;
  nameRu: string | null;
  nameEn: string | null;
  nameOriginal: string | null;
  posterUrl: string;
  posterUrlPreview: string;
  coverUrl: string;
  logoUrl?: any;
  reviewsCount: number;
  ratingGoodReview: number;
  ratingGoodReviewVoteCount: number;
  ratingKinopoisk: number;
  ratingKinopoiskVoteCount: number;
  ratingImdb: number;
  ratingImdbVoteCount: number;
  ratingFilmCritics: number;
  ratingFilmCriticsVoteCount: number;
  ratingAwait?: any;
  ratingAwaitCount: number;
  ratingRfCritics: number;
  ratingRfCriticsVoteCount: number;
  webUrl: string;
  year: number;
  filmLength: number;
  slogan: string;
  description: string;
  shortDescription: string;
  editorAnnotation?: any;
  isTicketsAvailable: boolean;
  productionStatus?: any;
  type: ItemType;
  ratingMpaa: string;
  ratingAgeLimits: string;
  countries: Country[];
  genres: Genre[];
  startYear?: any;
  endYear?: any;
  serial: boolean;
  shortFilm: boolean;
  completed: boolean;
  hasImax: boolean;
  has3D: boolean;
  lastSync: string;
}

export interface KinopoiskFilms {
  total: number;
  totalPages: number;
  items: KinopoiskFilmsItem[];
}

export interface KinopoiskFilmsItem {
  kinopoiskId: number;
  imdbId?: string;
  nameRu?: string;
  nameEn?: any;
  nameOriginal?: string;
  countries: Country[];
  genres: Genre[];
  ratingKinopoisk: number;
  ratingImdb?: number;
  year: number;
  type: ItemType;
  posterUrl: string;
  posterUrlPreview: string;
}

export type ItemType = 'VIEDO' | 'FILM' | 'MINI_SERIES' | 'TV_SERIES';

export interface Genre {
  genre: string;
}

export interface Country {
  country: string;
}
