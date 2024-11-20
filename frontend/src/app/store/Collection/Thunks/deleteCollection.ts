import { createAsyncThunk } from '@reduxjs/toolkit';
import { handleFetchError, DEFAULT_ERROR_MESSAGE, API_URL } from '../../hooks';

export const deleteCollection = createAsyncThunk<void, number, { rejectValue: Error }>(
    'collection/deleteCollection',
    async (id, { rejectWithValue }) => {
        try {
            const response = await fetch(`${API_URL}/lists/${id}`, {
                method: 'DELETE',
                credentials: 'include',
            });

            if (!response.ok) {
                throw new Error(DEFAULT_ERROR_MESSAGE);
            }
        } catch (error: unknown) {
            return rejectWithValue(handleFetchError(error));
        }
    },
);
