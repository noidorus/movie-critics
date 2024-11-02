import Loader from '../Loader/Loader';
import TitleContainer from './components/TitleContainer/TitleContainer';
import DescriptionContainer from './components/DescriptionContainer/DescriptionContainer';
import RatingContainer from './components/RatingContainer/RatingContainer';
import styles from './MoviePageContent.module.css';
import { useMoviePageContent } from './hooks/useMoviePageContent';
import ErrorComponent from '../ErrorComponent/ErrorComponent';

export default function MoviePageContent() {
    const { movie, isLoading, error, user, handleRatingUpdate } = useMoviePageContent();

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return <ErrorComponent error={error} />;
    }

    if (!movie) {
        return <ErrorComponent error="Такой фильм не найден. Возможно, его снимают сейчас! " />;
    }

    return (
        <div className={styles.content}>
            <TitleContainer movie={movie} />
            <RatingContainer movie={movie} user={user} onRatingUpdate={handleRatingUpdate} />
            <DescriptionContainer movie={movie} />
        </div>
    );
}
