import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from '@/app/store/Movie/Thunks/fetchMovieById';
import { useAppSelector, useAppDispatch } from '@/app/store/hooks';
import {
    selectMovie,
    selectIsLoading,
    selectMovieError,
    selectRatingUpdated,
    selectIdle,
} from '@/app/store/Movie/movieSelectors';
import { setRatingUpdated } from '@/app/store/Movie/movieSlice';
import { selectUser } from '@/app/store/Auth/authSelectors';
import { fetchComments } from '@/app/store/Comments/Thunks/fetchComments';
import {
    selectComments,
    selectLoading,
    selectError,
    selectCommentsUpdated,
} from '@/app/store/Comments/commentsSelectors';
import { setCommentsUpdated } from '@/app/store/Comments/commentsSlice';

export function useMoviePageContent() {
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();

    const movie = useAppSelector(selectMovie);
    const idle = useAppSelector(selectIdle);
    const isLoading = useAppSelector(selectIsLoading);
    const error = useAppSelector(selectMovieError);
    const user = useAppSelector(selectUser);
    const ratingUpdated = useAppSelector(selectRatingUpdated);

    const comments = useAppSelector(selectComments);
    const commentsLoading = useAppSelector(selectLoading);
    const commentsError = useAppSelector(selectError);
    const commentsUpdated = useAppSelector(selectCommentsUpdated);

    useEffect(() => {
        if (id) {
            dispatch(fetchMovieById(Number(id)))
                .unwrap()
                .then(() => {
                    dispatch(fetchComments(Number(id)));
                });
        }
    }, [dispatch, id]);

    useEffect(() => {
        if (ratingUpdated && id) {
            dispatch(fetchMovieById(Number(id)));
            dispatch(setRatingUpdated(false));
        }
    }, [ratingUpdated, dispatch, id]);

    useEffect(() => {
        if (commentsUpdated) {
            dispatch(fetchComments(Number(id)));
            dispatch(setCommentsUpdated(false));
        }
    }, [commentsUpdated, dispatch, id]);

    return useMemo(
        () => ({
            movie,
            idle,
            isLoading,
            error,
            user,
            handleRatingUpdate: () => dispatch(setRatingUpdated(true)),
            comments,
            commentsLoading,
            commentsError,
        }),
        [
            movie,
            isLoading,
            error,
            user,
            comments,
            commentsLoading,
            commentsError,
        ],
    );
}
