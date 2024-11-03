import type { RootState } from '../store';

export const selectCollection = (state: RootState) => state.collection.collection;
export const selectLoading = (state: RootState) => state.collection.isLoading;
export const selectError = (state: RootState) => state.collection.error;
