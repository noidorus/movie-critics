import { createAsyncThunk } from '@reduxjs/toolkit';
import { handleFetchError, defaultErrorMessage } from '../../hooks';

export const deleteCollection = createAsyncThunk<void, number, { rejectValue: Error }>(
    'collection/deleteCollection',
    async (id, { rejectWithValue }) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/lists/${id}`, {
                method: 'DELETE',
                credentials: 'include',
            });

            if (!response.ok) {
                throw new Error(defaultErrorMessage);
            }
        } catch (error: unknown) {
            return rejectWithValue(handleFetchError(error));
        }
    },
);
