import { createAsyncThunk } from '@reduxjs/toolkit';
import { Collection } from '@/app/types/CollectionType';
import { handleFetchError, DEFAULT_ERROR_MESSAGE, API_URL } from '../../hooks';

export const fetchCollections = createAsyncThunk<
    Collection[],
    void,
    { rejectValue: { message: string; name?: string } }
>('movies/fetchCollections', async (_, { rejectWithValue }) => {
    try {
        const response = await fetch(`${API_URL}/lists`);
        if (!response.ok) {
            throw new Error(DEFAULT_ERROR_MESSAGE);
        }

        return await response.json();
    } catch (error: unknown) {
        return rejectWithValue(handleFetchError(error));
    }
});
