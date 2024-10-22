import { createAsyncThunk } from '@reduxjs/toolkit';
import { MovieResponseData } from '../../DTO/MovieDTO';

const API_URL = 'http://localhost:3001/api/films';

export const fetchMovies = createAsyncThunk<
    MovieResponseData,
    number,
    { rejectValue: Error }
>('movies/fetchMovies', async (page = 1, { rejectWithValue }) => {
    try {
        const response = await fetch(`${API_URL}?page=${page}`);
        if (!response.ok) {
            throw new Error('Failed to fetch movies');
        }
        const data: MovieResponseData = await response.json();
        return data;
    } catch (error: unknown) {
        const movieError = error as Error;
        return rejectWithValue(movieError);
    }
});