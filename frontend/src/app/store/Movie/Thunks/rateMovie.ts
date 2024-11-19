import { createAsyncThunk } from '@reduxjs/toolkit';
import { Movie } from '@/app/types/MovieType';
import { RateRequestData } from '@/app/DTO/MovieDTO';
import { handleFetchError } from '../../hooks';

export const rateMovie = createAsyncThunk<Movie, RateRequestData, { rejectValue: Error }>(
    'movies/rateMovie',
    async ({ rating, filmId }, { rejectWithValue }) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/films/${filmId}/rate`, {
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

            return await response.json();
        } catch (error: unknown) {
            return rejectWithValue(handleFetchError(error));
        }
    },
);
