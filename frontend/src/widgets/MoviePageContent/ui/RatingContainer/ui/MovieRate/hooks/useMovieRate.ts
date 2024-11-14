import { useCallback, useMemo, useState } from 'react';
import { useAppSelector, useAppDispatch } from '@/app/store/hooks';
import { setRatingUpdated } from '@/app/store/Movie/movieSlice';
import { Rating } from '@/app/types/MovieType';
import { selectRatingLoading } from '@/app/store/Movie/movieSelectors';

export function useMovieRate(userId: number, movieId: number, ratings: Rating[]) {
    const dispatch = useAppDispatch();
    const [isDialogVisible, setDialogVisible] = useState(false);

    const ratingLoading = useAppSelector(selectRatingLoading);

    const userRating = useMemo(() => {
        return ratings.find((rating) => rating.userId === userId && rating.filmId === movieId)
            ?.userRating;
    }, [ratings, userId, movieId]);

    const openDialog = useCallback(() => setDialogVisible(true), []);
    const closeDialog = useCallback(() => setDialogVisible(false), []);

    const updateRating = useCallback(() => {
        dispatch(setRatingUpdated(true));
        closeDialog();
    }, [dispatch, closeDialog]);

    return useMemo(
        () => ({
            isDialogVisible,
            ratingLoading,
            userRating,
            openDialog,
            closeDialog,
            updateRating,
        }),
        [isDialogVisible, ratingLoading, userRating, openDialog, closeDialog, updateRating],
    );
}
