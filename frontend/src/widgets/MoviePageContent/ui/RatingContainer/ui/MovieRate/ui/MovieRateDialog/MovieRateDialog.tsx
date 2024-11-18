import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { useMovieRateDialog } from './hooks/useMovieRateDialog';
import styles from './MovieRateDialog.module.css';
import React from 'react';
import classNames from 'classnames';
import { useToastNotifications } from '@/shared/hooks/useToastNotifications';
import { Toast } from 'primereact/toast';

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
    const { selectedRating, setSelectedRating, handleRateMovie, loading, error, starContent } =
        useMovieRateDialog(movieId, onRatingUpdate, visible, userRating);
    const toast = useToastNotifications(
        error
            ? { severity: 'error', summary: 'Ошибка при выставлении рейтинга', detail: error }
            : null
    );
        

    return (
        <Dialog
            visible={visible}
            onHide={onHide}
            header="Оценить фильм"
            closable
            draggable={false}
            className={styles.dialog}
            contentClassName={styles.dialogContent}
            headerClassName={styles.dialogHeader}
        >
            <Toast ref={toast} />
            <div className={styles.starContainer}>
                <i className={classNames('pi pi-star-fill', styles.starIcon)} />
                <div className={styles.starContent}>{starContent}</div>
            </div>
            <div>
                <div className={styles.ratingOptions}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                        <Button
                            key={value}
                            className={classNames(styles.ratingButton, {
                                [styles.selected]:
                                    selectedRating !== null && value <= selectedRating,
                            })}
                            onClick={() => setSelectedRating(value)}
                        >
                            <span className={classNames('pi', 'pi-star-fill', styles.star)}></span>
                        </Button>
                    ))}
                </div>
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
