import MoviePreview from '@/features/MoviePreview/MoviePreview';
import { Button } from 'primereact/button';
import { Movie } from '@/app/types/MovieType';
import styles from './CollectionMovieList.module.css';
import React from 'react';
import classNames from 'classnames';

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
                                className={styles.deleteButton}
                                onClick={() => onDeleteMovie(movie.id)}
                            >
                                <span className={classNames('pi', 'pi-trash', styles.icon)}></span>
                            </Button>
                        )
                    }
                />
            ))}
        </ul>
    );
}

export default React.memo(CollectionMovieList);
