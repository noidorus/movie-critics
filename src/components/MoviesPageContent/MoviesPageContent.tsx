import { useMoviesPage } from './hooks/useMoviesPage';
import MoviePreview from './MoviePreview/MoviePreview';
import './MoviesPageContent.css';

export default function MoviesPageContent() {
    const { movies, isLoading, error, isFetching } = useMoviesPage();

    if (isLoading && movies.length === 0) {
        return <p className='loading-message'>Загрузка...</p>;
    }

    if (error) {
        return <p className='error-message'>Ошибка: {error}</p>;
    }

    return (
        <>
            <p className='movies-title'>Фильмы</p>
            <ul className='movies-list'>
                {movies.map((movie) => (
                    <MoviePreview key={movie.id} movie={movie} />
                ))}
            </ul>
            {isFetching && <p className='loading-message'>Загрузка ещё...</p>}
        </>
    );
}
