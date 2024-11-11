export interface TransformedOmdbFilmData {
  plot: string | null;
  awards: string | null;
  boxOffice: string | null;
}

export interface OmdbFilmData {
  Title: string;
  Year: string;
  Plot: string;
  Awards: string | 'N/A';
  BoxOffice?: string | 'N/A';
}
