import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../../../../../store/hooks';
import { rateMovie } from '../../../../../../../../../store/Movie/movieThunks';
import { setRatingUpdated } from '../../../../../../../../../store/Movie/movieSlice';
import {
    selectRatingLoading,
    selectRatingError,
} from '../../../../../../../../../store/Movie/movieSelectors';
import { RateRequestData } from '../../../../../../../../../DTO/MovieDTO';

export function useMovieRateDialog(movieId: number, onRatingUpdate: () => void) {
    const dispatch = useAppDispatch();
    const loading = useAppSelector(selectRatingLoading);
    const error = useAppSelector(selectRatingError);
    const [selectedRating, setSelectedRating] = useState<number | null>(null);

    const handleRateMovie = async () => {
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
    };

    return {
        selectedRating,
        setSelectedRating,
        handleRateMovie,
        loading,
        error,
    };
}
