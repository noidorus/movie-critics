import { createAsyncThunk } from '@reduxjs/toolkit';
import { Movie } from '@/app/types/MovieType';
import { handleFetchError, defaultErrorMessage } from '../../hooks';

export const fetchMovieById = createAsyncThunk<Movie, number, { rejectValue: Error }>(
    'movies/fetchMovieById',
    async (id, { rejectWithValue }) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/films/${id}`);
            if (!response.ok) {
                throw new Error(defaultErrorMessage);
            }

            return await response.json();
        } catch (error: unknown) {
            return rejectWithValue(handleFetchError(error));
        }
    },
);
