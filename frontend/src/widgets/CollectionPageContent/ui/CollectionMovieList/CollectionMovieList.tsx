import MoviePreview from '@/features/MoviePreview/MoviePreview';
import { Button } from 'primereact/button';
import { Movie } from '@/app/types/MovieType';
import styles from './CollectionMovieList.module.css';
import React from 'react';

interface Props {
    films: Movie[];
    userId: number | undefined;
    onDeleteMovie: (movieId: number) => void;
}

function CollectionMovieList({ films, userId, onDeleteMovie }: Props) {
    if (films.length === 0) {
        return <p className={styles.emptyList}>Подборка пока пуста</p>;
    }

    return (
        <ul className={styles.list}>
            {films.map((movie) => (
                <MoviePreview
                    key={movie.id}
                    movie={movie}
                    deleteButton={
                        userId && (
                            <Button
                                icon="pi pi-trash"
                                className="p-button-danger"
                                onClick={() => onDeleteMovie(movie.id)}
                            />
                        )
                    }
                />
            ))}
        </ul>
    );
}

export default React.memo(CollectionMovieList);
