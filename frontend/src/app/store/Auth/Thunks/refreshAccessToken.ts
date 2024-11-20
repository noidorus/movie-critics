import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '@/app/types/UserType';
import { handleFetchError, API_URL } from '../../hooks';

export const refreshAccessToken = createAsyncThunk<
    User,
    void,
    { rejectValue: { message: string } }
>('auth/refresh', async (_, { rejectWithValue }) => {
    try {
        const response = await fetch(`${API_URL}/auth/refresh`, {
            method: 'GET',
            credentials: 'include',
        });

        if (!response.ok) {
            throw new Error('Ошибка обновления токена');
        }

        return await response.json();
    } catch (error: unknown) {
        return rejectWithValue(handleFetchError(error));
    }
});
