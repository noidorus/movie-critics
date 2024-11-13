import { Movie } from '@/types/MovieType';
import styles from './DescriptionContainer.module.css';
import React from 'react';

type Props = {
    movie: Movie;
};

function DescriptionContainer({ movie }: Props) {
    return (
        <div className={styles.descriptionContainer}>
            <img
                src={movie.posterUrl}
                alt={movie.nameRu ? movie.nameRu : movie.nameOriginal}
                className={styles.poster}
            />
            <div>
                {movie.genres && (
                    <ul className={styles.genres}>
                        {movie.genres.map((genre) => (
                            <li key={genre.name} className={styles.genre}>
                                {genre.name}
                            </li>
                        ))}
                    </ul>
                )}
                <p className={styles.description}>{movie.description}</p>
            </div>
        </div>
    );
}

export default React.memo(DescriptionContainer);