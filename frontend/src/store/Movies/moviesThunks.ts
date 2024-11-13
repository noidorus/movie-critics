import { createAsyncThunk } from '@reduxjs/toolkit';
import { MoviesResponseData } from '@/DTO/MoviesDTO';

const API_URL = 'http://localhost:3001/api/films';

export const fetchMovies = createAsyncThunk<MoviesResponseData, number, { rejectValue: Error }>(
    'movies/fetchMovies',
    async (page = 1, { rejectWithValue }) => {
        try {
            const response = await fetch(`${API_URL}?page=${page}`);
            if (!response.ok) {
                throw new Error('Ошибка. Попробуйте позже или обратитесь в поддержку.');
            }
            const data: MoviesResponseData = await response.json();
            return data;
        } catch (error: unknown) {
            if (error instanceof TypeError) {
                return rejectWithValue({
                    message: 'Ошибка сервера. Попробуйте позже.',
                    name: 'TypeError',
                });
            }
            const movieError = error as Error;
            return rejectWithValue(movieError);
        }
    },
);
