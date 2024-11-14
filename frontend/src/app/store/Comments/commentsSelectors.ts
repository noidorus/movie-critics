import type { RootState } from '../store';

export const selectComments = (state: RootState) => state.comments.comments;

export const selectLoading = (state: RootState) => state.comments.isLoading;

export const selectError = (state: RootState) => state.comments.error;

export const selectCommentsUpdated = (state: RootState) => state.comments.commentsUpdated;

export const selectActionLoading = (state: RootState) => state.comments.actionLoading;

export const selectActionError = (state: RootState) => state.comments.actionError;
