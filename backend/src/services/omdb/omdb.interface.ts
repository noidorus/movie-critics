export interface OmdbDataSummary {
  plot: string | null;
  awards: string | null;
  boxOffice: string | null;
  actors: string | null;
}

export interface OmdbData {
  Actors: string;
  Title: string;
  Year: string;
  Plot: string;
  Awards: string | 'N/A';
  BoxOffice?: string | 'N/A';
  Response: 'False' | 'True';
  Error?: string;
}
