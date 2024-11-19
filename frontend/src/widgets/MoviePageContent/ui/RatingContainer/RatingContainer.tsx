import { Movie } from '@/app/types/MovieType';
import { User } from '@/app/types/UserType';
import styles from './RatingContainer.module.css';
import MovieRate from './ui/MovieRate/MovieRate';
import React from 'react';
import classNames from 'classnames';

type Props = {
    user: User | null;
    movie: Movie;
    onRatingUpdate: () => void;
    maxRating: number;
};

function RatingContainer({ movie, user, onRatingUpdate, maxRating }: Props) {
    const avgRating = movie.avgRating || 0;

    return (
        <div className={styles.ratingContainer}>
            {user && (
                <MovieRate
                    userId={user.id}
                    movieId={movie.id}
                    ratings={movie.ratings}
                    onRatingUpdate={onRatingUpdate}
                    maxRating={maxRating}
                />
            )}
            <div className={styles.avgRatingContainer}>
                <p className={styles.avgRatingTitle}>Общая оценка </p>
                <p className={styles.avgRating}>
                    <span className={styles.avgRatingValue}>
                        <span className={classNames('pi', 'pi-star-fill', styles.star)}></span>
                        {avgRating}
                    </span>
                    /{maxRating}
                </p>
            </div>
        </div>
    );
}

export default React.memo(RatingContainer);
