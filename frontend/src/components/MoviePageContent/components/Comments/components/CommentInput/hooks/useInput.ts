import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useState } from 'react';
import { postComment } from '@/store/Comments/commentsThunks';
import { postCommentRequestData } from '@/DTO/CommentsDTO';
import { selectError, selectLoading } from '@/store/Comments/commentsSelectors';

export const useInput = (filmId: number) => {
    const dispatch = useAppDispatch();
    const loading = useAppSelector(selectLoading);
    const error = useAppSelector(selectError);
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
