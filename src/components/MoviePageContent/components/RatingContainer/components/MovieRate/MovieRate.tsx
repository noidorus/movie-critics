import { Button } from 'primereact/button';
import { Rating } from '../../../../../../types/MovieType';
import MovieRateDialog from './components/MovieRateDialog/MovieRateDialog';
import { useMovieRate } from './hooks/useMovieRate';
import styles from './MovieRate.module.css';

type MovieRateProps = {
    userId: number;
    movieId: number;
    ratings: Rating[];
    onRatingUpdate: () => void;
};

export default function MovieRate({ userId, movieId, ratings, onRatingUpdate }: MovieRateProps) {
    if (!ratings) {
        return <div>Загрузка...</div>;
    }

    const {
        isDialogVisible,
        ratingLoading,
        userRating,
        openDialog,
        closeDialog,
        updateRating
    } = useMovieRate(userId, movieId, ratings);

    return (
        <div className={styles.yourRatingContainer}>
            <p className={styles.title}>Ваша оценка</p>
            {userRating ? (
                <Button className={styles.rateButton} onClick={openDialog} disabled={ratingLoading}>
                    <span className={styles.value}>{userRating}</span>/10
                </Button>
            ) : (
                <Button className={styles.rateButton} onClick={openDialog} disabled={ratingLoading}>
                    Оценить
                </Button>
            )}

            <MovieRateDialog 
                visible={isDialogVisible}
                onHide={closeDialog}
                movieId={movieId}
                userRating={userRating}
                onRatingUpdate={() => {
                    updateRating();
                    onRatingUpdate();
                }}
            />
        </div>
    );
}
