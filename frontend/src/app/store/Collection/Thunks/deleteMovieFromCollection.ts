import { createAsyncThunk } from '@reduxjs/toolkit';
import { manageMovieRequestData } from '@/app/DTO/CollectionDTO';
import { handleFetchError, DEFAULT_ERROR_MESSAGE } from '../../hooks';

export const deleteMovieFromCollection = createAsyncThunk<
    void,
    manageMovieRequestData,
    { rejectValue: Error }
>('collection/deleteMovieFromCollection', async (deleteMovieData, { rejectWithValue }) => {
    try {
        const response = await fetch(
            `${import.meta.env.VITE_API_URL}/lists/${deleteMovieData.collectionId}/films/${deleteMovieData.filmId}`,
            {
                method: 'DELETE',
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
