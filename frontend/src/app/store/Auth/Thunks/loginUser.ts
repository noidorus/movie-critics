import { createAsyncThunk } from '@reduxjs/toolkit';
import type { LoginRequestData, LoginResponseData } from '@/app/DTO/AuthDTO';
import { handleFetchError } from '../../hooks';

export const loginUser = createAsyncThunk<
    LoginResponseData,
    LoginRequestData,
    { rejectValue: { message: string } }
>('auth/login', async (loginData, { rejectWithValue }) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
            credentials: 'include',
        });

        if (!response.ok) {
            throw new Error('Неверные имя пользователя или пароль');
        }

        return await response.json();
    } catch (error: unknown) {
        return rejectWithValue(handleFetchError(error));
    }
});
