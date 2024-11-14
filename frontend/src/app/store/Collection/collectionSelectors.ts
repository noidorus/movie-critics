import type { RootState } from '../../store';

export const selectCollection = (state: RootState) => state.collection.collection;

export const selectIdle = (state: RootState) => state.collection.idle;

export const selectLoading = (state: RootState) => state.collection.isLoading;

export const selectError = (state: RootState) => state.collection.error;

export const selectActionLoading = (state: RootState) => state.collection.actionLoading;

export const selectActionError = (state: RootState) => state.collection.actionError;

export const selectCollectionUpdated = (state: RootState) => state.collection.collectionUpdated;
