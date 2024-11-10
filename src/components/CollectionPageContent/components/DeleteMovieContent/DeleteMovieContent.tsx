import { Button } from 'primereact/button';
import { useDelete } from './hooks/useDelete';
import styles from './DeleteMovieContent.module.css';

type Props = {
    onHide: () => void;
    onUpdate: () => void;
    id: number;
    filmId: number;
};

export default function DeleteMovieContent({ onHide, onUpdate, id, filmId }: Props) {
    const { onDeleteMovie, loading, error } = useDelete({ id, filmId, onHide, onUpdate });

    return (
        <div>
            <div className={styles.buttons}>
                <Button
                    label="Отмена"
                    className={styles.button}
                    onClick={() => {
                        onHide();
                    }}
                />
                <Button
                    className={styles.button}
                    onClick={() => {
                        onDeleteMovie();
                    }}
                >
                    {loading ? 'Загрузка...' : 'Подтвердить'}
                </Button>
            </div>
            {error && <p className={styles.error}>Ошибка: {error}</p>}
        </div>
    );
}
