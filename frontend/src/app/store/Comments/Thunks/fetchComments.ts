import { createAsyncThunk } from '@reduxjs/toolkit';
import { Comment } from '@/app/types/CommentType';
import { handleFetchError, defaultErrorMessage } from '../../hooks';

export const fetchComments = createAsyncThunk<Comment[], number, { rejectValue: Error }>(
    'comments/fetchComments',
    async (filmId, { rejectWithValue }) => {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/films/${filmId}/comments`,
            );
            if (!response.ok) {
                throw new Error(defaultErrorMessage);
            }

            return await response.json();
        } catch (error: unknown) {
            return rejectWithValue(handleFetchError(error));
        }
    },
);
