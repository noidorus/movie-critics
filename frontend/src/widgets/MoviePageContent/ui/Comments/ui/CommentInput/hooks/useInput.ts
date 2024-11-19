import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { useEffect, useState } from 'react';
import { postComment } from '@/app/store/Comments/Thunks/postComment';
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
        dispatch(postComment(commentData));
    };

    useEffect(() => {
        if (error) {
            return;
        }

        setCommentText('');
    }, [error]);

    return {
        commentText,
        setCommentText,
        handleSubmit,
        loading,
        error,
    };
};
