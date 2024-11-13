import { Button } from 'primereact/button';
import styles from './AddToCollectionContainer.module.css';
import { useDialog } from './hooks/useDialog';
import AddToCollectionDialog from './components/AddToCollectionDialog/AddToCollectionDialog';
import React from 'react';

type Props = {
    movieId: number;
};

function AddToCollectionContainer({ movieId }: Props) {
    const { visible, setVisible, onHide } = useDialog();

    return (
        <>
            <Button className={styles.button} onClick={() => setVisible(true)}>
                Добавить в подборку
            </Button>
            <AddToCollectionDialog visible={visible} onHide={onHide} movieId={movieId} />
        </>
    );
}

export default React.memo(AddToCollectionContainer);
