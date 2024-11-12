import { Button } from 'primereact/button';
import { useVisibility } from './hooks/useVisibility';
import styles from './ChangeVisibilityContent.module.css';

type Props = {
    onHideModal: () => void;
    onUpdate: () => void;
    collectionId: number;
    visibility: boolean;
};

export default function ChangeVisibilityContent({
    onHideModal,
    collectionId,
    visibility,
    onUpdate,
}: Props) {
    const { handleToggleVisibility, loading, error } = useVisibility({
        id: collectionId,
        visibility,
        onHideModal,
        onUpdate,
    });

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
                    onClick={ handleToggleVisibility}
                >
                    {loading ? 'Загрузка...' : 'Подтвердить'}
                </Button>
            </div>
            {error && <p className={styles.error}>Ошибка: {error}</p>}
        </div>
    );
}
