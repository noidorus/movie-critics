import { Button } from 'primereact/button';
import { useDelete } from './hooks/useDelete';
import styles from './DeleteMovieContent.module.css';

type Props = {
    onHideModal: () => void;
    onUpdate: () => void;
    collectionId: number;
    filmId: number;
};

export default function DeleteMovieContent({ onHideModal, onUpdate, collectionId, filmId }: Props) {
    const { onDeleteMovie, loading, error } = useDelete({ collectionId, filmId, onHideModal, onUpdate });

    return (
        <div>
            <div className={styles.buttons}>
                <Button
                    label="Отмена"
                    className={styles.button}
                    onClick={onHideModal}
                />
                <Button
                    className={styles.button}
                    onClick={onDeleteMovie}
                >
                    {loading ? 'Загрузка...' : 'Подтвердить'}
                </Button>
            </div>
            {error && <p className={styles.error}>Ошибка: {error}</p>}
        </div>
    );
}
