import { createAsyncThunk } from '@reduxjs/toolkit';
import { Comment } from '@/app/types/CommentType';
import { handleFetchError, DEFAULT_ERROR_MESSAGE, API_URL } from '../../hooks';

export const fetchComments = createAsyncThunk<Comment[], number, { rejectValue: Error }>(
    'comments/fetchComments',
    async (filmId, { rejectWithValue }) => {
        try {
            const response = await fetch(
                `${API_URL}/films/${filmId}/comments`,
            );
            if (!response.ok) {
                throw new Error(DEFAULT_ERROR_MESSAGE);
            }

            return await response.json();
        } catch (error: unknown) {
            return rejectWithValue(handleFetchError(error));
        }
    },
);
