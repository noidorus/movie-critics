import ErrorComponent from '@/shared/ErrorComponent/ErrorComponent';
import Loader from '@/shared/Loader/Loader';
import MoviePreview from '@/features/MoviePreview/MoviePreview';
import { useMoviesPage } from './hooks/useMoviesPage';
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
            <h2 className={styles.title}>Фильмы</h2>
            <ul className={styles.list}>
                {movies.map((movie) => (
                    <MoviePreview key={movie.id} movie={movie} />
                ))}
            </ul>
            {isLoading && <p className={styles.loadingMessage}>Загрузка ещё...</p>}
        </>
    );
}
