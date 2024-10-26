type Rating = {
    id: number;
    userId: number;
    filmId: number;
    userRating: number;
};

export type Movie = {
    id: number;
    nameOriginal: string;
    nameRu: string;
    posterUrlPreview: string;
    slogan: string;
    description: string;
    filmLength: number;
    year: number;
    posterUrl: string;
    countries: string[];
    genres: string[];
    avgRating: number;
    ratings: Rating[];
};

export type MoviePreviewData = Pick<Movie, 'id' | 'nameRu' | 'nameOriginal' | 'posterUrlPreview'>;
