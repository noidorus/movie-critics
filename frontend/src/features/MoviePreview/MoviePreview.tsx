import React from 'react';
import { MoviePreviewData } from '@/app/types/MovieType';
import styles from './MoviePreview.module.css';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

interface MoviePreviewProps {
    movie: MoviePreviewData;
    deleteButton?: React.ReactNode;
}

const MoviePreview: React.FC<MoviePreviewProps> = ({ movie, deleteButton }) => {
    return (
        <li key={movie.id} className={styles.movie}>
            <div
                className={classNames(styles.posterWrapper, {
                    [styles.posterDeleteWrapper]: deleteButton,
                })}
            >
                <img src={movie.posterUrlPreview} alt={movie.nameRu} className={styles.poster} />
            </div>
            {deleteButton && <div className={styles.deleteButton}>{deleteButton}</div>}
            <Link className={styles.title} to={`/movies/${movie.id}`}>
                {movie.nameRu ? movie.nameRu : movie.nameOriginal}
            </Link>
        </li>
    );
};

export default MoviePreview;
