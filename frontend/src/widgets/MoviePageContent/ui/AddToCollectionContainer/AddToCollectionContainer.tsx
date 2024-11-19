import { Button } from 'primereact/button';
import styles from './AddToCollectionContainer.module.css';
import { useDialog } from './hooks/useDialog';
import AddToCollectionDialog from './ui/AddToCollectionDialog/AddToCollectionDialog';
import React from 'react';
import classNames from 'classnames';

type Props = {
    movieId: number;
};

function AddToCollectionContainer({ movieId }: Props) {
    const { visible, setVisible, onHide } = useDialog();

    return (
        <>
            <Button className={styles.button} onClick={() => setVisible(true)}>
                <span className={classNames('pi', styles.bookmark, 'pi-bookmark')}></span>
            </Button>
            <AddToCollectionDialog visible={visible} onHide={onHide} movieId={movieId} />
        </>
    );
}

export default React.memo(AddToCollectionContainer);
