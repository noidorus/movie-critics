import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { useMovieRateDialog } from './hooks/useMovieRateDialog';
import classNames from 'classnames';
import styles from './MovieRateDialog.module.css';
import React from 'react';

type MovieRateDialogProps = {
    visible: boolean;
    onHide: () => void;
    movieId: number;
    userRating: number | undefined;
    onRatingUpdate: () => void;
};

function MovieRateDialog({
    visible,
    onHide,
    movieId,
    userRating,
    onRatingUpdate,
}: MovieRateDialogProps) {
    const { selectedRating, setSelectedRating, handleRateMovie, loading, error } =
        useMovieRateDialog(movieId, onRatingUpdate);

    return (
        <Dialog
            visible={visible}
            onHide={onHide}
            header="Оценить фильм"
            closable
            draggable={false}
            className={styles.dialog}
        >
            <div className={styles.dialogContent}>
                {userRating ? (
                    <p>Ваша текущая оценка: {userRating}/10</p>
                ) : (
                    <p>У вас пока нет оценки для этого фильма.</p>
                )}
                <div className={styles.ratingOptions}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                        <Button
                            key={value}
                            className={classNames(styles.ratingButton, { [styles.selected]: selectedRating === value })}
                            label={String(value)}
                            onClick={() => setSelectedRating(value)}
                        />
                    ))}
                </div>
                {error && <p className={styles.errorMessage}>{error}</p>}
            </div>
            <Button
                label={loading ? 'Загрузка...' : 'Оценить'}
                onClick={handleRateMovie}
                disabled={selectedRating === null || loading}
                className={styles.submitButton}
            />
        </Dialog>
    );
}

export default React.memo(MovieRateDialog);