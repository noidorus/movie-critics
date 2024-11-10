import type { RootState } from '../store';

export const selectCollections = (state: RootState) => state.collections.collections;

export const selectLoading = (state: RootState) => state.collections.isLoading;

export const selectError = (state: RootState) => state.collections.error;

export const selectCollectionsUpdated = (state: RootState) => state.collections.collectionsUpdated;

export const selectActionLoading = (state: RootState) => state.collections.actionLoading;

export const selectActionError = (state: RootState) => state.collections.actionError;

export const selectFormError = (state: RootState) => state.collections.formError;

export const selectCollectionName = (state: RootState) => state.collections.collectionName;

export const selectIsPrivate = (state: RootState) => state.collections.isPrivate;
