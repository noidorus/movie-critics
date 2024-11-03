import { createAsyncThunk } from '@reduxjs/toolkit';
import { Movie } from '../../types/MovieType';
import { RateRequestData } from '../../DTO/MovieDTO';

const API_URL = 'http://localhost:3001/api/films';

export const fetchMovieById = createAsyncThunk<Movie, number, { rejectValue: Error }>(
    'movies/fetchMovieById',
    async (id, { rejectWithValue }) => {
        try {
            const response = await fetch(`${API_URL}/${id}`);
            if (!response.ok) {
                throw new Error('Ошибка. Попробуйте позже или обратитесь в поддержку.');
            }
            const data: Movie = await response.json();
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

export const rateMovie = createAsyncThunk<Movie, RateRequestData, { rejectValue: Error }>(
    'movies/rateMovie',
    async ({ rating, filmId }, { rejectWithValue }) => {
        try {
            const response = await fetch(`${API_URL}/${filmId}/rate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ rating }),
                credentials: 'include',
            });
            if (!response.ok) {
                throw new Error('Не удалось оценить фильм. Попробуйте позже.');
            }
            const data: Movie = await response.json();
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
