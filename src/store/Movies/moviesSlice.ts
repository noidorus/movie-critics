import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchMovies } from './moviesThunks';
import { MovieResponseData } from '../../DTO/MoviesDTO';
import { MoviePreviewData } from '../../types/MovieType';

interface MoviesState {
    movies: MoviePreviewData[];
    isLoading: boolean;
    error: string | null;
    currentPage: number;
    totalPages: number;
}

const initialState: MoviesState = {
    movies: [],
    isLoading: false,
    error: null,
    currentPage: 1,
    totalPages: 1,
};

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchMovies.fulfilled, (state, action: PayloadAction<MovieResponseData>) => {
                state.movies = [...state.movies, ...action.payload.items];
                state.isLoading = false;
                state.currentPage = action.payload.page;
                state.totalPages = action.payload.totalPages;
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload ? action.payload.message : 'Failed to fetch movies';
            });
    },
});

export default moviesSlice.reducer;
