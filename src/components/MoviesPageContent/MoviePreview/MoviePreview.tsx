import React from 'react';
import { MoviePreviewData } from '../../../types/MovieType';
import './MoviePreview.css';

interface MoviePreviewProps {
    movie: MoviePreviewData;
}

const MoviePreview: React.FC<MoviePreviewProps> = ({ movie }) => {
    return (
        <li key={movie.id} className="movie-item">
            <img src={movie.posterUrlPreview} alt={movie.nameRu} className="movie-poster" />
            <a className="movie-title" href={`/movies/${movie.id}`}>
                {movie.nameRu ? movie.nameRu : movie.nameOriginal}
            </a>
        </li>
    );
};

export default MoviePreview;
