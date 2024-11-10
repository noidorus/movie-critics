import { Comment } from '@/types/CommentType';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchComments, postComment } from './commentsThunks';

interface CommentsState {
    comments: Comment[];
    isLoading: boolean;
    error: string | null;
    commentsUpdated: boolean;
    actionLoading: boolean;
    actionError: string | null;
}

const initialState: CommentsState = {
    comments: [],
    isLoading: false,
    error: null,
    commentsUpdated: false,
    actionLoading: false,
    actionError: null,
};

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        setCommentsUpdated: (state, action) => {
            state.commentsUpdated = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchComments.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchComments.fulfilled, (state, action: PayloadAction<Comment[]>) => {
                state.isLoading = false;
                state.comments = action.payload;
            })
            .addCase(fetchComments.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
                    ? action.payload.message
                    : 'Ошибка при получении комментариев. Попробуйте позже';
            })
            .addCase(postComment.pending, (state) => {
                state.actionLoading = true;
                state.actionError = null;
            })
            .addCase(postComment.fulfilled, (state) => {
                state.actionLoading = false;
                state.commentsUpdated = true;
            })
            .addCase(postComment.rejected, (state, action) => {
                state.actionLoading = false;
                state.actionError = action.payload
                    ? action.payload.message
                    : 'Ошибка при отправке комментария. Попробуйте позже';
            });
    },
});

export const { setCommentsUpdated } = commentsSlice.actions;

export default commentsSlice.reducer;
