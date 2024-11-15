import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { useState } from 'react';
import { postComment } from '@/app/store/Comments/commentsThunks';
import { postCommentRequestData } from '@/app/DTO/CommentsDTO';
import { selectActionError, selectActionLoading } from '@/app/store/Comments/commentsSelectors';

export const useInput = (filmId: number) => {
    const dispatch = useAppDispatch();
    const loading = useAppSelector(selectActionLoading);
    const error = useAppSelector(selectActionError);
    const [commentText, setCommentText] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const commentData: postCommentRequestData = {
            text: commentText,
            filmId,
        };
        setCommentText('');
        dispatch(postComment(commentData));
    };

    return {
        commentText,
        setCommentText,
        handleSubmit,
        loading,
        error,
    };
};
