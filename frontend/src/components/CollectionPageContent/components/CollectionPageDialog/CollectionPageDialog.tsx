import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import styles from './CollectionPageDialog.module.css';
import React from 'react';

type Props = {
    visible: boolean;
    onHideModal: () => void;
    title: string;
    handleAction: () => void;
    loading: boolean;
    error: string | null;
};

function CollectionPageDialog({
    visible,
    onHideModal,
    title,
    handleAction,
    loading,
    error,
}: Props) {
    return (
        <Dialog header={title} onHide={onHideModal} visible={visible} draggable={false}>
            <div className={styles.buttons}>
                <Button label="Отмена" className={styles.button} onClick={onHideModal} />
                <Button className={styles.button} onClick={handleAction}>
                    {loading ? 'Загрузка...' : 'Подтвердить'}
                </Button>
            </div>
            {error && <p className={styles.error}>Ошибка: {error}</p>}
        </Dialog>
    );
}

export default React.memo(CollectionPageDialog);
