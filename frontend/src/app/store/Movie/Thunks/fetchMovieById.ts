import { createAsyncThunk } from '@reduxjs/toolkit';
import { Movie } from '@/app/types/MovieType';
import { handleFetchError, DEFAULT_ERROR_MESSAGE, API_URL } from '../../hooks';

export const fetchMovieById = createAsyncThunk<Movie, number, { rejectValue: Error }>(
    'movies/fetchMovieById',
    async (id, { rejectWithValue }) => {
        try {
            const response = await fetch(`${API_URL}/films/${id}`);
            if (!response.ok) {
                throw new Error(DEFAULT_ERROR_MESSAGE);
            }

            return await response.json();
        } catch (error: unknown) {
            return rejectWithValue(handleFetchError(error));
        }
    },
);
