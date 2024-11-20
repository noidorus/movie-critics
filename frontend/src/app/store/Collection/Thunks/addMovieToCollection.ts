import { createAsyncThunk } from '@reduxjs/toolkit';
import { manageMovieRequestData } from '@/app/DTO/CollectionDTO';
import { handleFetchError, DEFAULT_ERROR_MESSAGE, API_URL } from '../../hooks';

export const addMovieToCollection = createAsyncThunk<
    void,
    manageMovieRequestData,
    { rejectValue: Error }
>('collection/addMovieToCollection', async (deleteMovieData, { rejectWithValue }) => {
    try {
        const response = await fetch(
            `${API_URL}/lists/${deleteMovieData.collectionId}/films/${deleteMovieData.filmId}`,
            {
                method: 'POST',
                credentials: 'include',
            },
        );

        if (!response.ok) {
            throw new Error(DEFAULT_ERROR_MESSAGE);
        }
    } catch (error: unknown) {
        return rejectWithValue(handleFetchError(error));
    }
});
