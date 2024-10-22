import React from 'react';
import { Movie } from '../../../types/MovieType';
import './MoviePreview.css';

interface MoviePreviewProps {
    movie: Movie;
}

const MoviePreview: React.FC<MoviePreviewProps> = ({ movie }) => {
    return (
        <li key={movie.id} className='movie-item'>
            <img src={movie.posterUrlPreview} alt={movie.nameRu} className='movie-poster'/>
            <h3 className='movie-title'>{movie.nameRu ? movie.nameRu : movie.nameOriginal}</h3>
        </li>
    );
};

export default MoviePreview;
