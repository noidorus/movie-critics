import React from 'react';
import { MoviePreviewData } from '@/types/MovieType';
import styles from './MoviePreview.module.css';

interface MoviePreviewProps {
    movie: MoviePreviewData;
}

const MoviePreview: React.FC<MoviePreviewProps> = ({ movie }) => {
    return (
        <li key={movie.id} className={styles.movie}>
            <img src={movie.posterUrlPreview} alt={movie.nameRu} className={styles.poster} />
            <a className={styles.title} href={`/movies/${movie.id}`}>
                {movie.nameRu ? movie.nameRu : movie.nameOriginal}
            </a>
        </li>
    );
};

export default MoviePreview;
