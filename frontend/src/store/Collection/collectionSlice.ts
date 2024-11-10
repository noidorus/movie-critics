import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Collection } from '@/types/CollectionType';
import {
    fetchCollection,
    changeVisibility,
    deleteCollection,
    deleteMovieFromCollection,
    addMovieToCollection
} from './collectionThunks';

interface CollectionState {
    collection: Collection | null;
    isLoading: boolean;
    error: string | null;
    collectionUpdated: boolean;
    actionLoading: boolean;
    actionError: string | null;
}

const initialState: CollectionState = {
    collection: null,
    isLoading: false,
    error: null,
    collectionUpdated: false,
    actionLoading: false,
    actionError: null,
};

const collectionSlice = createSlice({
    name: 'collection',
    initialState,
    reducers: {
        setCollectionUpdated: (state, action) => {
            state.collectionUpdated = action.payload;
        },
        clearActionError: (state) => {
            state.actionError = null;
        },
    },
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
            })
            .addCase(changeVisibility.pending, (state) => {
                state.actionLoading = true;
                state.actionError = null;
            })
            .addCase(changeVisibility.fulfilled, (state, action: PayloadAction<Collection>) => {
                state.actionLoading = false;
                if (state.collection) {
                    state.collection.private = action.payload.private;
                }
            })
            .addCase(changeVisibility.rejected, (state, action) => {
                state.actionLoading = false;
                state.actionError = action.payload
                    ? action.payload.message
                    : 'Ошибка при изменении видимости. Попробуйте позже';
            })
            .addCase(deleteCollection.pending, (state) => {
                state.actionLoading = true;
                state.actionError = null;
            })
            .addCase(deleteCollection.fulfilled, (state) => {
                state.actionLoading = false;
                state.collection = null;
            })
            .addCase(deleteCollection.rejected, (state, action) => {
                state.actionLoading = false;
                state.actionError = action.payload
                    ? action.payload.message
                    : 'Ошибка при удалении коллекции. Попробуйте позже';
            })
            .addCase(deleteMovieFromCollection.pending, (state) => {
                state.actionLoading = true;
                state.actionError = null;
            })
            .addCase(deleteMovieFromCollection.fulfilled, (state) => {
                state.actionLoading = false;
                state.collectionUpdated = true;
            })
            .addCase(deleteMovieFromCollection.rejected, (state, action) => {
                state.actionLoading = false;
                state.actionError = action.payload
                    ? action.payload.message
                    : 'Ошибка при удалении фильма из коллекции. Попробуйте позже';
            })
            .addCase(addMovieToCollection.pending, (state) => {
                state.actionLoading = true;
                state.actionError = null;
            })
            .addCase(addMovieToCollection.fulfilled, (state) => {
                state.actionLoading = false;
                state.collectionUpdated = true;
            })
            .addCase(addMovieToCollection.rejected, (state, action) => {
                state.actionLoading = false;
                state.actionError = action.payload
                    ? action.payload.message
                    : 'Ошибка при добавлении фильма в коллекцию. Попробуйте позже';
            });
    },
});

export const { setCollectionUpdated, clearActionError } = collectionSlice.actions;

export default collectionSlice.reducer;
