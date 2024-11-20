import { createAsyncThunk } from '@reduxjs/toolkit';
import { handleFetchError, API_URL } from '../../hooks';

export const logoutUser = createAsyncThunk<void, void, { rejectValue: { message: string } }>(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(`${API_URL}/auth/logout`, {
                method: 'GET',
                credentials: 'include',
            });

            if (!response.ok) {
                throw new Error('Не получилось выйти');
            }
        } catch (error: unknown) {
            return rejectWithValue(handleFetchError(error));
        }
    },
);
