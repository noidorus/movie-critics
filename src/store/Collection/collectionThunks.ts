import { createAsyncThunk } from '@reduxjs/toolkit';
import { Collection } from '@/types/CollectionType';

const API_URL = 'http://localhost:3001/api/lists';

export const fetchCollection = createAsyncThunk<Collection, number, { rejectValue: Error }>(
    'movies/fetchCollection',
    async (id, { rejectWithValue }) => {
        try {
            const response = await fetch(`${API_URL}/${id}`,  {
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
            const collectionsError = error as Error;
            return rejectWithValue(collectionsError);
        }
    },
);
