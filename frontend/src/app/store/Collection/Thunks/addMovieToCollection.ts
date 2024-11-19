import { createAsyncThunk } from '@reduxjs/toolkit';
import { manageMovieRequestData } from '@/app/DTO/CollectionDTO';
import { handleFetchError, defaultErrorMessage } from '../../hooks';

export const addMovieToCollection = createAsyncThunk<
    void,
    manageMovieRequestData,
    { rejectValue: Error }
>('collection/addMovieToCollection', async (deleteMovieData, { rejectWithValue }) => {
    try {
        const response = await fetch(
            `${import.meta.env.VITE_API_URL}/lists/${deleteMovieData.collectionId}/films/${deleteMovieData.filmId}`,
            {
                method: 'POST',
                credentials: 'include',
            },
        );

        if (!response.ok) {
            throw new Error(defaultErrorMessage);
        }
    } catch (error: unknown) {
        return rejectWithValue(handleFetchError(error));
    }
});
