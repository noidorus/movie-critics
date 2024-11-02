import { useCallback, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from '../../../store/Movie/movieThunks';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import {
    selectMovie,
    selectIsLoading,
    selectMovieError,
    selectRatingUpdated,
} from '../../../store/Movie/movieSelectors';
import { setRatingUpdated } from '../../../store/Movie/movieSlice';
import { selectUser } from '../../../store/Auth/authSelectors';

export function useMoviePageContent() {
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();

    const movie = useAppSelector(selectMovie);
    const isLoading = useAppSelector(selectIsLoading);
    const error = useAppSelector(selectMovieError);
    const user = useAppSelector(selectUser);
    const ratingUpdated = useAppSelector(selectRatingUpdated);

    useEffect(() => {
        if (id) {
            dispatch(fetchMovieById(Number(id)));
        }
    }, [dispatch, id]);

    useEffect(() => {
        if (ratingUpdated && id) {
            dispatch(fetchMovieById(Number(id)));
            dispatch(setRatingUpdated(false));
        }
    }, [ratingUpdated, dispatch, id]);

    const handleRatingUpdate = useCallback(() => {
        dispatch(setRatingUpdated(true));
    }, [dispatch]);

    return useMemo(
        () => ({
            movie,
            isLoading,
            error,
            user,
            handleRatingUpdate,
        }),
        [movie, isLoading, error, user, handleRatingUpdate],
    );
}
