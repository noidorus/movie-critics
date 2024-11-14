import { createAsyncThunk } from '@reduxjs/toolkit';
import { Collection } from '../../types/CollectionType';
import { CreateCollectionRequestData } from '@/app/DTO/CollectionsDTO';

const API_URL = 'http://localhost:3001/api/lists';

export const fetchCollections = createAsyncThunk<Collection[], void, { rejectValue: Error }>(
    'movies/fetchCollections',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(`${API_URL}`);
            if (!response.ok) {
                throw new Error('Ошибка. Попробуйте позже или обратитесь в поддержку.');
            }
            const data: Collection[] = await response.json();
            return data;
        } catch (error: unknown) {
            if (error instanceof TypeError) {
                return rejectWithValue({
                    message: 'Ошибка сервера. Попробуйте позже.',
                    name: 'TypeError',
                });
            }
            const collectionsError = error as Error;
            return rejectWithValue(collectionsError);
        }
    },
);

export const fetchCollectionsByMe = createAsyncThunk<Collection[], void, { rejectValue: Error }>(
    'movies/fetchCollections/me',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(`${API_URL}/my`, {
                credentials: 'include',
            });
            if (!response.ok) {
                throw new Error('Ошибка. Попробуйте позже или обратитесь в поддержку.');
            }
            const data: Collection[] = await response.json();
            return data;
        } catch (error: unknown) {
            if (error instanceof TypeError) {
                return rejectWithValue({
                    message: 'Ошибка сервера. Попробуйте позже.',
                    name: 'TypeError',
                });
            }
            const collectionsError = error as Error;
            return rejectWithValue(collectionsError);
        }
    },
);

export const createCollection = createAsyncThunk<
    Collection,
    CreateCollectionRequestData,
    { rejectValue: { message: string; name?: string } }
>('movies/createCollection', async (collectionData, { rejectWithValue }) => {
    try {
        const response = await fetch(`${API_URL}`, {
            credentials: 'include',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(collectionData),
        });
        if (!response.ok) {
            if (response.status === 409) {
                return rejectWithValue({
                    message: 'У вас уже есть список с таким названием.',
                    name: 'ConflictError',
                });
            }
            throw new Error('Произошла ошибка при создании подборки.');
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
        const collectionsError = error as Error;
        return rejectWithValue({ message: collectionsError.message });
    }
});
