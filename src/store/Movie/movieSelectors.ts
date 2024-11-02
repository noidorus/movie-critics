import type { RootState } from '../store';

export const selectMovie = (state: RootState) => state.movie.movie;

export const selectIsLoading = (state: RootState) => state.movie.isLoading;

export const selectMovieError = (state: RootState) => state.movie.error;

export const selectRatingUpdated = (state: RootState) => state.movie.ratingUpdated;

export const selectRatingLoading = (state: RootState) => state.movie.ratingLoading;

export const selectRatingError = (state: RootState) => state.movie.ratingError;