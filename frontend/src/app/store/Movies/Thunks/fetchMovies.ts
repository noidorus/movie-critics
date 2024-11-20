import { createAsyncThunk } from '@reduxjs/toolkit';
import { MoviesResponseData } from '@/app/DTO/MoviesDTO';
import { handleFetchError, DEFAULT_ERROR_MESSAGE } from '../../hooks';

export const fetchMovies = createAsyncThunk<MoviesResponseData, number, { rejectValue: Error }>(
    'movies/fetchMovies',
    async (page = 1, { rejectWithValue }) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/films?page=${page}`);
            if (!response.ok) {
                throw new Error(DEFAULT_ERROR_MESSAGE);
            }

            return await response.json();
        } catch (error: unknown) {
            return rejectWithValue(handleFetchError(error));
        }
    },
);
