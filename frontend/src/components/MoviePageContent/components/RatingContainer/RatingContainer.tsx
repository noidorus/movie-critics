import { Movie } from '@/types/MovieType';
import { User } from '@/types/UserType';
import styles from './RatingContainer.module.css';
import MovieRate from './components/MovieRate/MovieRate';
import React from 'react';

type Props = {
    user: User | null;
    movie: Movie;
    onRatingUpdate: () => void;
};

function RatingContainer({ movie, user, onRatingUpdate }: Props) {
    return (
        <div className={styles.ratingContainer}>
            {user && (
                <MovieRate
                    userId={user.id}
                    movieId={movie.id}
                    ratings={movie.ratings}
                    onRatingUpdate={onRatingUpdate}
                />
            )}
            <div className={styles.avgRatingContainer}>
                <p className={styles.avgRatingTitle}>Общая оценка </p>
                {movie.avgRating ? (
                    <p className={styles.avgRating}>
                        <span className={styles.avgRatingValue}>{movie.avgRating}</span>/10
                    </p>
                ) : (
                    <p className={styles.avgRating}>
                        <span className={styles.avgRatingValue}>0</span>/10
                    </p>
                )}
            </div>
        </div>
    );
}

export default React.memo(RatingContainer);