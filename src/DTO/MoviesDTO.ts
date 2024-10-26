import { MoviePreviewData } from '../types/MovieType';

export type MovieResponseData = {
    items: MoviePreviewData[];
    totalPages: number;
    page: number;
};
