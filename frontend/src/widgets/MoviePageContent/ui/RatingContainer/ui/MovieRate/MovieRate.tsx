import { Button } from 'primereact/button';
import { Rating } from '@/app/types/MovieType';
import MovieRateDialog from './ui/MovieRateDialog/MovieRateDialog';
import { useMovieRate } from './hooks/useMovieRate';
import styles from './MovieRate.module.css';
import React from 'react';
import classNames from 'classnames';

type MovieRateProps = {
    userId: number;
    movieId: number;
    ratings: Rating[];
    onRatingUpdate: () => void;
    maxRating: number;
};

function MovieRate({ userId, movieId, ratings, onRatingUpdate, maxRating }: MovieRateProps) {
    if (!ratings) {
        return <div>Загрузка...</div>;
    }

    const { isDialogVisible, ratingLoading, userRating, openDialog, closeDialog, updateRating } =
        useMovieRate(userId, movieId, ratings);

    return (
        <div className={styles.yourRatingContainer}>
            <p className={styles.title}>Ваша оценка</p>
            {userRating ? (
                <Button className={styles.rateButton} onClick={openDialog} disabled={ratingLoading}>
                    <span className={styles.value}>
                        <span className={classNames('pi', 'pi-star-fill', styles.star)}></span>
                        {userRating}
                    </span>
                    /{maxRating}
                </Button>
            ) : (
                <Button className={styles.rateButton} onClick={openDialog} disabled={ratingLoading}>
                    <span className={classNames('pi', 'pi-star', styles.star)}></span>
                    <span className={styles.text}>Оценить</span>
                </Button>
            )}

            <MovieRateDialog
                visible={isDialogVisible}
                onHide={closeDialog}
                movieId={movieId}
                userRating={userRating}
                onRatingUpdate={() => {
                    updateRating();
                    onRatingUpdate();
                }}
            />
        </div>
    );
}

export default React.memo(MovieRate);
