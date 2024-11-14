import { MoviePreviewData } from '@/app/types/MovieType';

export type MoviesResponseData = {
    items: MoviePreviewData[];
    totalPages: number;
    page: number;
};
