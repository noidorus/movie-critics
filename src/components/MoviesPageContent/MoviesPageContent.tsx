import ErrorComponent from '../ErrorComponent/ErrorComponent';
import Loader from '../Loader/Loader';
import { useMoviesPage } from './hooks/useMoviesPage';
import MoviePreview from './MoviePreview/MoviePreview';
import styles from './MoviesPageContent.module.css';

export default function MoviesPageContent() {
    const { movies, isLoading, error } = useMoviesPage();

    if (isLoading && movies.length === 0) {
        return <Loader />;
    }

    if (error) {
        return <ErrorComponent error={error} />;
    }

    return (
        <>
            <p className={styles.title}>Фильмы</p>
            <ul className={styles.list}>
                {movies.map((movie) => (
                    <MoviePreview key={movie.id} movie={movie} />
                ))}
            </ul>
            {isLoading && <p className={styles.loadingMessage}>Загрузка ещё...</p>}
        </>
    );
}
