import { createAsyncThunk } from '@reduxjs/toolkit';
import { Collection } from '@/app/types/CollectionType';
import { CreateCollectionRequestData } from '@/app/DTO/CollectionsDTO';
import { handleFetchError } from '../../hooks';

export const createCollection = createAsyncThunk<
    Collection,
    CreateCollectionRequestData,
    { rejectValue: { message: string; name?: string } }
>('movies/createCollection', async (collectionData, { rejectWithValue }) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/lists`, {
            credentials: 'include',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(collectionData),
        });
        if (!response.ok) {
            if (response.status === 409) {
                return rejectWithValue({
                    message: 'У вас уже есть подборка с таким названием.',
                    name: 'ConflictError',
                });
            }
            throw new Error('Произошла ошибка при создании подборки.');
        }

        return await response.json();
    } catch (error: unknown) {
        return rejectWithValue(handleFetchError(error));
    }
});
