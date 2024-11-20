import { createAsyncThunk } from '@reduxjs/toolkit';
import { Collection } from '@/app/types/CollectionType';
import { visibilityRequestData } from '@/app/DTO/CollectionDTO';
import { handleFetchError, DEFAULT_ERROR_MESSAGE, API_URL } from '../../hooks';

export const changeVisibility = createAsyncThunk<
    Collection,
    visibilityRequestData,
    { rejectValue: Error }
>('collection/changeVisibility', async (visibilityData, { rejectWithValue }) => {
    try {
        const response = await fetch(
            `${API_URL}/lists/${visibilityData.collectionId}/visibility`,
            {
                method: 'PATCH',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ private: visibilityData.private }),
            },
        );

        if (!response.ok) {
            throw new Error(DEFAULT_ERROR_MESSAGE);
        }

        return await response.json();
    } catch (error: unknown) {
        return rejectWithValue(handleFetchError(error));
    }
});
