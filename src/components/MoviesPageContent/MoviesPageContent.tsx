import ErrorComponent from '@/components/ErrorComponent/ErrorComponent';
import Loader from '@/components/Loader/Loader';
import MoviePreview from '@/components/MoviePreview/MoviePreview';
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
