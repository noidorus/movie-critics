import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import styles from './CollectionPageDialog.module.css';
import React from 'react';
import { useToastNotifications } from './hooks/useToastNotifications';
import { Toast } from 'primereact/toast';

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
    const toast = useToastNotifications(error);

    return (
        <Dialog header={title} onHide={onHideModal} visible={visible} draggable={false} headerClassName={styles.header} contentClassName={styles.content} className={styles.dialog}>
            <Toast ref={toast} />
            <div className={styles.buttons}>
                <Button label="Отмена" className={styles.button} onClick={onHideModal} />
                <Button className={styles.button} onClick={handleAction}>
                    {loading ? 'Загрузка...' : 'Подтвердить'}
                </Button>
            </div>
        </Dialog>
    );
}

export default React.memo(CollectionPageDialog);
