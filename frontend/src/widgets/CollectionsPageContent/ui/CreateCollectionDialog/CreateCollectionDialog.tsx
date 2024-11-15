import { Dialog } from 'primereact/dialog';
import CreateCollectionForm from '@/features/CreateCollectionForm/CreateCollectionForm';
import React from 'react';
import styles from './CreateCollectionDialog.module.css';

type Props = {
    visible: boolean;
    onHide: () => void;
};

function CreateCollectionDialog({ visible, onHide }: Props) {
    return (
        <Dialog
            header="Создать подборку"
            visible={visible}
            onHide={onHide}
            draggable={false}
            headerClassName={styles.header}
            contentClassName={styles.content}
            className={styles.dialog}
        >
            <CreateCollectionForm onHide={onHide} visible={visible} />
        </Dialog>
    );
}

export default React.memo(CreateCollectionDialog);
