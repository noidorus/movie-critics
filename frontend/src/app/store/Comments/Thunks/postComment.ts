import { createAsyncThunk } from '@reduxjs/toolkit';
import { Comment } from '@/app/types/CommentType';
import { postCommentRequestData } from '@/app/DTO/CommentsDTO';
import { handleFetchError, defaultErrorMessage } from '../../hooks';

export const postComment = createAsyncThunk<
    Comment,
    postCommentRequestData,
    { rejectValue: Error }
>('comments/postComment', async (commentData, { rejectWithValue }) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(commentData),
        });
        if (!response.ok) {
            throw new Error(defaultErrorMessage);
        }

        return await response.json();
    } catch (error: unknown) {
        return rejectWithValue(handleFetchError(error));
    }
});
