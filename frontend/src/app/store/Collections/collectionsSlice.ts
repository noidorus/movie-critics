import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Collection } from '../../types/CollectionType';
import { fetchCollections } from './Thunks/fetchCollections';
import { fetchCollectionsByMe } from './Thunks/fetchCollectionsByMe';
import { createCollection } from './Thunks/createCollection';

interface CollectionsState {
    collections: Collection[];
    idle: boolean;
    isLoading: boolean;
    error: string | null;
    collectionsUpdated: boolean;
    actionLoading: boolean;
    actionError: string | null;
    collectionName: string;
    isPrivate: boolean;
    formError: string | null;
}

const initialState: CollectionsState = {
    collections: [],
    idle: true,
    isLoading: false,
    error: null,
    collectionsUpdated: false,
    actionLoading: false,
    actionError: null,
    collectionName: '',
    isPrivate: true,
    formError: null,
};

const collectionsSlice = createSlice({
    name: 'collections',
    initialState,
    reducers: {
        setCollectionsUpdated: (state, action) => {
            state.collectionsUpdated = action.payload;
        },
        clearActionError: (state) => {
            state.actionError = null;
        },
        setCollectionName: (state, action: PayloadAction<string>) => {
            state.collectionName = action.payload;
        },
        setIsPrivate: (state, action: PayloadAction<boolean>) => {
            state.isPrivate = action.payload;
        },
        clearForm: (state) => {
            state.collectionName = '';
            state.isPrivate = true;
            state.formError = null;
            state.actionError = null;
        },
        validateCollectionName: (state) => {
            state.actionError = null;
            if (!state.collectionName.trim()) {
                state.formError = 'Введите название подборки';
            } else if (state.collectionName.length > 30) {
                state.formError = 'Название не должно превышать 30 символов';
            } else {
                state.formError = null;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCollections.pending, (state) => {
                state.idle = false;
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
                    : 'Ошибка при получении подборок. Попробуйте позже';
            })
            .addCase(fetchCollectionsByMe.pending, (state) => {
                state.idle = false;
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
                    : 'Ошибка при получении подборок. Попробуйте позже';
            })
            .addCase(createCollection.pending, (state) => {
                state.actionLoading = true;
                state.actionError = null;
            })
            .addCase(createCollection.fulfilled, (state) => {
                state.actionLoading = false;
                state.collectionsUpdated = true;
            })
            .addCase(createCollection.rejected, (state, action) => {
                state.actionLoading = false;
                state.actionError = action.payload
                    ? action.payload.message
                    : 'Ошибка при создании подборки. Попробуйте позже';
            });
    },
});

export const {
    setCollectionsUpdated,
    clearActionError,
    setCollectionName,
    setIsPrivate,
    validateCollectionName,
    clearForm,
} = collectionsSlice.actions;

export default collectionsSlice.reducer;
