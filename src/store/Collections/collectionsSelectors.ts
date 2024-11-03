import type { RootState } from '../store';

export const selectCollections = (state: RootState) => state.collections.collections;

export const selectLoading = (state: RootState) => state.collections.isLoading;

export const selectError = (state: RootState) => state.collections.error;
