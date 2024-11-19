import { createAsyncThunk } from '@reduxjs/toolkit';
import { Collection } from '@/app/types/CollectionType';

export const fetchCollection = createAsyncThunk<Collection, number, { rejectValue: Error }>(
    'collection/fetchCollection',
    async (id, { rejectWithValue }) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/lists/${id}`, {
                credentials: 'include',
            });
            if (!response.ok) {
                throw new Error('Ошибка. Попробуйте позже или обратитесь в поддержку.');
            }

            return await response.json();
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
