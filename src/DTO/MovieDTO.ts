import { Movie } from '../types/MovieType';

export type MovieResponseData = {
    items: Movie[];
    totalPages: number;
    page: number;
};
