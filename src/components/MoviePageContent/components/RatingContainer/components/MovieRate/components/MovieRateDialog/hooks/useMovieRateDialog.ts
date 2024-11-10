import { useCallback, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { rateMovie } from '@/store/Movie/movieThunks';
import { setRatingUpdated } from '@/store/Movie/movieSlice';
import { selectRatingLoading, selectRatingError } from '@/store/Movie/movieSelectors';
import { RateRequestData } from '@/DTO/MovieDTO';

export function useMovieRateDialog(movieId: number, onRatingUpdate: () => void) {
    const dispatch = useAppDispatch();
    const loading = useAppSelector(selectRatingLoading);
    const error = useAppSelector(selectRatingError);
    const [selectedRating, setSelectedRating] = useState<number | null>(null);

    const memoizedSetSelectedRating = useCallback((rating: number | null) => {
        setSelectedRating(rating);
    }, []);

    const handleRateMovie = useCallback(async () => {
        if (selectedRating === null) {
            return;
        }

        const rateData: RateRequestData = {
            rating: selectedRating,
            filmId: movieId,
        };

        const resultAction = await dispatch(rateMovie(rateData));

        if (rateMovie.fulfilled.match(resultAction)) {
            dispatch(setRatingUpdated(true));
            onRatingUpdate();
        }
    }, [dispatch, selectedRating, movieId, onRatingUpdate]);

    return useMemo(
        () => ({
            selectedRating,
            setSelectedRating: memoizedSetSelectedRating,
            handleRateMovie,
            loading,
            error,
        }),
        [selectedRating, memoizedSetSelectedRating, handleRateMovie, loading, error],
    );
}
