import Loader from '../Loader/Loader';
import TitleContainer from './components/TitleContainer/TitleContainer';
import DescriptionContainer from './components/DescriptionContainer/DescriptionContainer';
import RatingContainer from './components/RatingContainer/RatingContainer';
import styles from './MoviePageContent.module.css';
import { useMoviePageContent } from './hooks/useMoviePageContent';
import ErrorComponent from '@/components/ErrorComponent/ErrorComponent';
import Comments from './components/Comments/Comments';
import AddToCollectionContainer from './components/AddToCollectionContainer/AddToCollectionContainer';

export default function MoviePageContent() {
    const {
        movie,
        idle,
        isLoading,
        error,
        user,
        handleRatingUpdate,
        comments,
        commentsLoading,
        commentsError,
    } = useMoviePageContent();

    if (isLoading || idle) {
        return <Loader />;
    }

    if (error || !movie) {
        return (
            <ErrorComponent
                error={error || 'Такой фильм не найден. Возможно, его снимают сейчас!'}
            />
        );
    }

    return (
        <div className={styles.content}>
            <TitleContainer movie={movie} />
            <RatingContainer movie={movie} user={user} onRatingUpdate={handleRatingUpdate} />
            {user ? (
                <AddToCollectionContainer movieId={movie.id} />
            ) : (
                <div className={styles.emptyAddButton}></div>
            )}
            <DescriptionContainer movie={movie} />
            <Comments
                filmId={movie.id}
                comments={comments}
                loading={commentsLoading}
                error={commentsError}
                user={user}
            />
        </div>
    );
}
