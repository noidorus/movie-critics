import type { RootState } from '../store';

export const selectMovies = (state: RootState) => state.movies.movies;

export const selectIsLoading = (state: RootState) => state.movies.isLoading;

export const selectMoviesError = (state: RootState) => state.movies.error;

export const selectCurrentPage = (state: RootState) => state.movies.currentPage;

export const selectTotalPages = (state: RootState) => state.movies.totalPages;