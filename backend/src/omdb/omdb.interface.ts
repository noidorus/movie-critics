export interface OmdbFilmDataSummary {
  plot: string | null;
  awards: string | null;
  boxOffice: string | null;
  actors: string | null;
}

export interface OmdbFilmData {
  Actors: string;
  Title: string;
  Year: string;
  Plot: string;
  Awards: string | 'N/A';
  BoxOffice?: string | 'N/A';
}
