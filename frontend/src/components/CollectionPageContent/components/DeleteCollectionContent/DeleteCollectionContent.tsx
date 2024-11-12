import { Button } from 'primereact/button';
import { useDelete } from './hooks/useDelete';
import styles from './DeleteCollectionContent.module.css';

type Props = {
    onHideModal: () => void;
    id: number;
};

export default function DeleteCollectionContent({ onHideModal, id }: Props) {
    const { onDeleteCollection, loading, error } = useDelete({ id, onHideModal });

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
                    onClick={onDeleteCollection}
                >
                    {loading ? 'Загрузка...' : 'Подтвердить'}
                </Button>
            </div>
            {error && <p className={styles.error}>{error}</p>}
        </div>
    );
}
