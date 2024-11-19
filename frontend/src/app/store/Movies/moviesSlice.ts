import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchMovies } from './Thunks/fetchMovies';
import { MoviesResponseData } from '@/app/DTO/MoviesDTO';
import { MoviePreviewData } from '@/app/types/MovieType';

interface MoviesState {
    movies: MoviePreviewData[];
    isLoading: boolean;
    isFetching: boolean;
    error: string | null;
    currentPage: number;
    totalPages: number;
    initialLoad: boolean;
}

const initialState: MoviesState = {
    movies: [],
    isLoading: false,
    isFetching: false,
    error: null,
    currentPage: 1,
    totalPages: 1,
    initialLoad: true,
};

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setFetching: (state, action: PayloadAction<boolean>) => {
            state.isFetching = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.isLoading = true;
                state.isFetching = true;
                state.error = null;
            })
            .addCase(fetchMovies.fulfilled, (state, action: PayloadAction<MoviesResponseData>) => {
                state.movies = [...state.movies, ...action.payload.items];
                state.isLoading = false;
                state.isFetching = false;
                state.currentPage = action.payload.page;
                if (state.currentPage === 1) {
                    state.initialLoad = false;
                }
                state.totalPages = action.payload.totalPages;
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
                    ? action.payload.message
                    : 'Ошибка при получении фильмов. Попробуйте позже';
            });
    },
});

export const { setFetching } = moviesSlice.actions;
export default moviesSlice.reducer;
