import { createAsyncThunk } from '@reduxjs/toolkit';
import { Comment } from '@/app/types/CommentType';
import { postCommentRequestData } from '@/app/DTO/CommentsDTO';

const API_URL = 'http://localhost:3000/api';

export const fetchComments = createAsyncThunk<Comment[], number, { rejectValue: Error }>(
    'comments/fetchComments',
    async (filmId, { rejectWithValue }) => {
        try {
            const response = await fetch(`${API_URL}/films/${filmId}/comments`);
            if (!response.ok) {
                throw new Error('Ошибка. Попробуйте позже или обратитесь в поддержку.');
            }
            const data: Comment[] = await response.json();
            return data;
        } catch (error: unknown) {
            if (error instanceof TypeError) {
                return rejectWithValue({
                    message: 'Ошибка сервера. Попробуйте позже.',
                    name: 'TypeError',
                });
            }
            const commentsError = error as Error;
            return rejectWithValue(commentsError);
        }
    },
);

export const postComment = createAsyncThunk<
    Comment,
    postCommentRequestData,
    { rejectValue: Error }
>('comments/postComment', async (commentData, { rejectWithValue }) => {
    try {
        const response = await fetch(`${API_URL}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(commentData),
        });
        if (!response.ok) {
            throw new Error('Ошибка. Попробуйте позже или обратитесь в поддержку.');
        }
        const data: Comment = await response.json();
        return data;
    } catch (error: unknown) {
        if (error instanceof TypeError) {
            return rejectWithValue({
                message: 'Ошибка сервера. Попробуйте позже.',
                name: 'TypeError',
            });
        }
        const commentsError = error as Error;
        return rejectWithValue(commentsError);
    }
});
