import { createAsyncThunk } from '@reduxjs/toolkit';
import { Collection } from '../../types/CollectionType';

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
