import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Collection } from '../../types/CollectionType';
import { fetchCollections, fetchCollectionsByMe } from './collectionsThunks';

interface CollectionsState {
    collections: Collection[];
    isLoading: boolean;
    error: string | null;
}

const initialState: CollectionsState = {
    collections: [],
    isLoading: false,
    error: null,
};

const collectionsSlice = createSlice({
    name: 'collections',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCollections.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchCollections.fulfilled, (state, action: PayloadAction<Collection[]>) => {
                state.isLoading = false;
                state.collections = action.payload;
            })
            .addCase(fetchCollections.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
                    ? action.payload.message
                    : 'Ошибка при получении коллекций. Попробуйте позже';
            })
            .addCase(fetchCollectionsByMe.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(
                fetchCollectionsByMe.fulfilled,
                (state, action: PayloadAction<Collection[]>) => {
                    state.isLoading = false;
                    state.collections = action.payload;
                },
            )
            .addCase(fetchCollectionsByMe.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
                    ? action.payload.message
                    : 'Ошибка при получении коллекций. Попробуйте позже';
            });
    },
});

export default collectionsSlice.reducer;
