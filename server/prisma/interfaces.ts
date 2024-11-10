export interface SeedFilm {
  kpId: string;
  nameRu: null | string;
  nameOriginal: null | string;
  slogan: null | string;
  description: null | string;
  shortDescription: null | string;
  filmLength: number;
  year: number;
  posterUrl: string;
  posterUrlPreview: string;
  countries: string[];
  genres: string[];
  type: 'VIDEO' | 'FILM' | 'MINI_SERIES' | 'TV_SERIES' | 'TV_SHOW';
}

export interface UpsertFilterObj {
  where: { name: string };
  create: { name: string };
  update: object;
}
