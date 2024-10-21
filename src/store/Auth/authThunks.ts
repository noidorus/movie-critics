import { createAsyncThunk } from '@reduxjs/toolkit';
import type {
    LoginRequestData,
    LoginResponseData,
    RegisterRequestData,
    RegisterResponseData,
    AuthError,
} from '../../DTO/AuthDTO';
import { User } from '../../types/UserType';

const API_URL = 'http://localhost:3001/api/auth';

export const loginUser = createAsyncThunk<
    LoginResponseData,
    LoginRequestData,
    { rejectValue: AuthError }
>('auth/login', async (loginData, { rejectWithValue }) => {
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
            credentials: 'include',
        });

        if (!response.ok) {
            throw { message: 'Неверные имя пользователя или пароль', status: response.status } as AuthError;
        }

        const data: LoginResponseData = await response.json();
        return data;
    } catch (error: unknown) {
        if (error instanceof TypeError) {
            return rejectWithValue({ message: 'Ошибка сервера. Попробуйте позже.', status: 500 });
        }
        const authError = error as AuthError;
        return rejectWithValue(authError);
    }
});

export const registerUser = createAsyncThunk<
    RegisterResponseData,
    RegisterRequestData,
    { rejectValue: AuthError }
>('auth/register', async (registerData, { rejectWithValue }) => {
    try {
        const response = await fetch(`${API_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(registerData),
        });

        if (!response.ok) {
            throw { message: 'Пользователь уже существует', status: response.status } as AuthError;
        }

        const data: RegisterResponseData = await response.json();
        return data;
    } catch (error: unknown) {
        if (error instanceof TypeError) {
            return rejectWithValue({ message: 'Ошибка сервера. Попробуйте позже.', status: 500 });
        }
        const authError = error as AuthError;
        return rejectWithValue(authError);
    }
});

export const checkAuth = createAsyncThunk<User, void, { rejectValue: AuthError }>(
    'auth/check',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(`${API_URL}/`, {
                method: 'GET',
                credentials: 'include',
            });

            if (!response.ok) {
                throw new Error('Ошибка проверки аутентификации');
            }

            return response.json();
        } catch (error: unknown) {
            return rejectWithValue({ message: 'Ошибка проверки аутентификации', status: 500 });
        }
    },
);
