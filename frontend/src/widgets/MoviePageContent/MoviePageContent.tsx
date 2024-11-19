import Loader from '../../shared/Loader/Loader';
import TitleContainer from './ui/TitleContainer/TitleContainer';
import DescriptionContainer from './ui/DescriptionContainer/DescriptionContainer';
import RatingContainer from './ui/RatingContainer/RatingContainer';
import styles from './MoviePageContent.module.css';
import { useMoviePageContent } from './hooks/useMoviePageContent';
import ErrorComponent from '@/shared/ErrorComponent/ErrorComponent';
import Comments from './ui/Comments/Comments';
import AddToCollectionContainer from './ui/AddToCollectionContainer/AddToCollectionContainer';

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

    const MAX_RATING = 10;

    return (
        <div className={styles.content}>
            <TitleContainer movie={movie} />
            <RatingContainer
                movie={movie}
                user={user}
                onRatingUpdate={handleRatingUpdate}
                maxRating={MAX_RATING}
            />
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
