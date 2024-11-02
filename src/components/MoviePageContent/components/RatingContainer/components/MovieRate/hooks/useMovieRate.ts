import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../../../../../store/hooks';
import { setRatingUpdated } from '../../../../../../../store/Movie/movieSlice';
import { Rating } from '../../../../../../../types/MovieType';
import { selectRatingLoading } from '../../../../../../../store/Movie/movieSelectors';

export function useMovieRate(userId: number, movieId: number, ratings: Rating[]) {
    const dispatch = useAppDispatch();
    const [isDialogVisible, setDialogVisible] = useState(false);

    const ratingLoading = useAppSelector(selectRatingLoading);
    const userRating = ratings.find(rating => rating.userId === userId && rating.filmId === movieId)?.userRating;

    const openDialog = () => setDialogVisible(true);
    const closeDialog = () => setDialogVisible(false);

    const updateRating = () => {
        dispatch(setRatingUpdated(true));
        closeDialog();
    };

    return {
        isDialogVisible,
        ratingLoading,
        userRating,
        openDialog,
        closeDialog,
        updateRating
    };
}
