import { createAsyncThunk } from '@reduxjs/toolkit';
import { Collection } from '@/app/types/CollectionType';
import { visibilityRequestData, manageMovieRequestData } from '@/app/DTO/CollectionDTO';

const API_URL = 'http://localhost:3000/api/lists';

export const fetchCollection = createAsyncThunk<Collection, number, { rejectValue: Error }>(
    'collection/fetchCollection',
    async (id, { rejectWithValue }) => {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                credentials: 'include',
            });
            if (!response.ok) {
                throw new Error('Ошибка. Попробуйте позже или обратитесь в поддержку.');
            }
            const data: Collection = await response.json();
            return data;
        } catch (error: unknown) {
            if (error instanceof TypeError) {
                return rejectWithValue({
                    message: 'Ошибка сервера. Попробуйте позже.',
                    name: 'TypeError',
                });
            }
            const collectionError = error as Error;
            return rejectWithValue(collectionError);
        }
    },
);

export const changeVisibility = createAsyncThunk<
    Collection,
    visibilityRequestData,
    { rejectValue: Error }
>('collection/changeVisibility', async (visibilityData, { rejectWithValue }) => {
    try {
        const response = await fetch(`${API_URL}/${visibilityData.collectionId}/visibility`, {
            method: 'PATCH',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ private: visibilityData.private }),
        });

        if (!response.ok) {
            throw new Error('Ошибка. Попробуйте позже или обратитесь в поддержку.');
        }
        const data: Collection = await response.json();

        return data;
    } catch (error: unknown) {
        if (error instanceof TypeError) {
            return rejectWithValue({
                message: 'Ошибка сервера. Попробуйте позже.',
                name: 'TypeError',
            });
        }
        const collectionError = error as Error;
        return rejectWithValue(collectionError);
    }
});

export const deleteCollection = createAsyncThunk<void, number, { rejectValue: Error }>(
    'collection/deleteCollection',
    async (id, { rejectWithValue }) => {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE',
                credentials: 'include',
            });

            if (!response.ok) {
                throw new Error('Ошибка. Попробуйте позже или обратитесь в поддержку.');
            }
        } catch (error: unknown) {
            if (error instanceof TypeError) {
                return rejectWithValue({
                    message: 'Ошибка сервера. Попробуйте позже.',
                    name: 'TypeError',
                });
            }
            const collectionError = error as Error;
            return rejectWithValue(collectionError);
        }
    },
);

export const deleteMovieFromCollection = createAsyncThunk<
    void,
    manageMovieRequestData,
    { rejectValue: Error }
>('collection/deleteMovieFromCollection', async (deleteMovieData, { rejectWithValue }) => {
    try {
        const response = await fetch(
            `${API_URL}/${deleteMovieData.collectionId}/films/${deleteMovieData.filmId}`,
            {
                method: 'DELETE',
                credentials: 'include',
            },
        );

        if (!response.ok) {
            throw new Error('Ошибка. Попробуйте позже или обратитесь в поддержку.');
        }
    } catch (error: unknown) {
        if (error instanceof TypeError) {
            return rejectWithValue({
                message: 'Ошибка сервера. Попробуйте позже.',
                name: 'TypeError',
            });
        }
        const collectionError = error as Error;
        return rejectWithValue(collectionError);
    }
});

export const addMovieToCollection = createAsyncThunk<
    void,
    manageMovieRequestData,
    { rejectValue: Error }
>('collection/addMovieToCollection', async (deleteMovieData, { rejectWithValue }) => {
    try {
        const response = await fetch(
            `${API_URL}/${deleteMovieData.collectionId}/films/${deleteMovieData.filmId}`,
            {
                method: 'POST',
                credentials: 'include',
            },
        );

        if (!response.ok) {
            throw new Error('Ошибка. Попробуйте позже или обратитесь в поддержку.');
        }
    } catch (error: unknown) {
        if (error instanceof TypeError) {
            return rejectWithValue({
                message: 'Ошибка сервера. Попробуйте позже.',
                name: 'TypeError',
            });
        }
        const collectionError = error as Error;
        return rejectWithValue(collectionError);
    }
});
