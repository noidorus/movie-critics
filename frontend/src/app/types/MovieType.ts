export type Rating = {
    id: number;
    userId: number;
    filmId: number;
    userRating: number;
};

type Genre = {
    name: string;
};

export type Movie = {
    id: number;
    nameOriginal: string;
    nameRu: string;
    posterUrlPreview: string;
    slogan: string;
    type: string;
    description: string;
    filmLength: number;
    year: number;
    posterUrl: string;
    countries: string[];
    genres: Genre[];
    avgRating: number;
    ratings: Rating[];
    actors: string;
};

export type MoviePreviewData = Pick<Movie, 'id' | 'nameRu' | 'nameOriginal' | 'posterUrlPreview'>;
