import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Collection } from '@/types/CollectionType';
import { fetchCollection } from './collectionThunks';

interface CollectionState {
    collection: Collection | null;
    isLoading: boolean;
    error: string | null;
}

const initialState: CollectionState = {
    collection: null,
    isLoading: false,
    error: null,
};

const collectionSlice = createSlice({
    name: 'collection',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCollection.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchCollection.fulfilled, (state, action: PayloadAction<Collection>) => {
                state.isLoading = false;
                state.collection = action.payload;
            })
            .addCase(fetchCollection.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
                    ? action.payload.message
                    : 'Ошибка при получении коллекции. Попробуйте позже';
            });
    },
});

export default collectionSlice.reducer;
