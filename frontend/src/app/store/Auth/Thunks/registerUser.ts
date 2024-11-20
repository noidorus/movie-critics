import { createAsyncThunk } from '@reduxjs/toolkit';
import type { RegisterRequestData } from '@/app/DTO/AuthDTO';
import { handleFetchError, API_URL } from '../../hooks';

export const registerUser = createAsyncThunk<
    void,
    RegisterRequestData,
    { rejectValue: { message: string } }
>('auth/register', async (registerData, { rejectWithValue }) => {
    try {
        const response = await fetch(`${API_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(registerData),
        });

        if (!response.ok) {
            throw new Error('Пользователь уже существует');
        }
    } catch (error: unknown) {
        return rejectWithValue(handleFetchError(error));
    }
});
