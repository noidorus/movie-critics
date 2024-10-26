import { createAsyncThunk } from '@reduxjs/toolkit';
import { MovieResponseData } from '../../DTO/MoviesDTO';

const API_URL = 'http://localhost:3001/api/films';

export const fetchMovies = createAsyncThunk<MovieResponseData, number, { rejectValue: Error }>(
    'movies/fetchMovies',
    async (page = 1, { rejectWithValue }) => {
        try {
            const response = await fetch(`${API_URL}?page=${page}`);
            if (!response.ok) {
                throw new Error('Ошибка. Попробуйте позже или обратитесь в поддержку.');
            }
            const data: MovieResponseData = await response.json();
            console.log(data);
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
