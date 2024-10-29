import { MoviePreviewData } from '../types/MovieType';

export type MoviesResponseData = {
    items: MoviePreviewData[];
    totalPages: number;
    page: number;
};
