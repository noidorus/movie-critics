import MoviePreview from '@/components/MoviePreview/MoviePreview';
import { Button } from 'primereact/button';
import { Movie } from '@/types/MovieType';
import styles from './CollectionMovieList.module.css';

interface Props {
    films: Movie[];
    userId: number | undefined;
    onDeleteMovie: (movieId: number) => void;
}

export default function CollectionMovieList ({ films, userId, onDeleteMovie }: Props) {
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
};
