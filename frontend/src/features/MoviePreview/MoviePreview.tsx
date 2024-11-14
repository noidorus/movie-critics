import React from 'react';
import { MoviePreviewData } from '@/app/types/MovieType';
import styles from './MoviePreview.module.css';

interface MoviePreviewProps {
    movie: MoviePreviewData;
    deleteButton?: React.ReactNode;
}

const MoviePreview: React.FC<MoviePreviewProps> = ({ movie, deleteButton }) => {
    return (
        <li key={movie.id} className={styles.movie}>
            <img src={movie.posterUrlPreview} alt={movie.nameRu} className={styles.poster} />
            {deleteButton && <div className={styles.deleteButton}>{deleteButton}</div>}
            <a className={styles.title} href={`/movies/${movie.id}`}>
                {movie.nameRu ? movie.nameRu : movie.nameOriginal}
            </a>
        </li>
    );
};

export default MoviePreview;
