import { createAsyncThunk } from '@reduxjs/toolkit';
import { handleFetchError } from '../../hooks';

export const logoutUser = createAsyncThunk<void, void, { rejectValue: { message: string } }>(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/logout`, {
                method: 'GET',
                credentials: 'include',
            });

            if (!response.ok) {
                throw new Error('Не получилось выйти');
            }

            return await response.json();
        } catch (error: unknown) {
            return rejectWithValue(handleFetchError(error));
        }
    },
);
