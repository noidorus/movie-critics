import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '@/app/types/MovieType';
import { fetchMovieById } from './Thunks/fetchMovieById';
import { rateMovie } from './Thunks/rateMovie';

interface MovieState {
    idle: boolean;
    movie: Movie | null;
    isLoading: boolean;
    error: string | null;
    ratingLoading: boolean;
    ratingUpdated: boolean;
    ratingError: string | null;
}

const initialState: MovieState = {
    idle: true,
    movie: null,
    isLoading: false,
    error: null,
    ratingLoading: false,
    ratingUpdated: false,
    ratingError: null,
};

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setRatingUpdated(state, action) {
            state.ratingUpdated = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovieById.pending, (state) => {
                state.idle = false;
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchMovieById.fulfilled, (state, action: PayloadAction<Movie>) => {
                state.isLoading = false;
                state.movie = action.payload;
            })
            .addCase(fetchMovieById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
                    ? action.payload.message
                    : 'Ошибка при получении фильмов. Попробуйте позже';
            })
            .addCase(rateMovie.pending, (state) => {
                state.ratingLoading = true;
                state.ratingError = null;
            })
            .addCase(rateMovie.fulfilled, (state, action: PayloadAction<Movie>) => {
                state.ratingLoading = false;
                state.movie = action.payload;
            })
            .addCase(rateMovie.rejected, (state, action) => {
                state.ratingLoading = false;
                state.ratingError = action.payload
                    ? action.payload.message
                    : 'Ошибка при отправке оценки. Попробуйте позже';
            });
    },
});

export const { setRatingUpdated } = movieSlice.actions;

export default movieSlice.reducer;
