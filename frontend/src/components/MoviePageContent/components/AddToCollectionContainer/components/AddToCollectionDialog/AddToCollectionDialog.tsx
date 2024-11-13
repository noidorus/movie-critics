import { Dialog } from 'primereact/dialog';
import { useCollections } from './hooks/useCollections';
import { useFormVisibility } from './hooks/useFormVisibility';
import CreateCollectionForm from '@/components/CreateCollectionForm/CreateCollectionForm';
import CreateCollectionCheckbox from './components/CreateCollectionCheckbox/CreateCollectionCheckbox';
import CollectionList from './components/CollectionList/CollectionList';
import styles from './addToCollectionDialog.module.css';
import React from 'react';

type Props = {
    visible: boolean;
    onHide: () => void;
    movieId: number;
};

function AddToCollectionDialog({ visible, onHide, movieId }: Props) {
    const { collections, onChange, errorCollectionId, error } = useCollections();
    const { formVisible, toggleFormVisibility } = useFormVisibility();

    return (
        <Dialog header="Добавить в подборку" visible={visible} onHide={onHide} draggable={false}>
            <CollectionList
                collections={collections}
                movieId={movieId}
                onChange={onChange}
                errorCollectionId={errorCollectionId}
                error={error}
            />
            <div className={styles.createCollection}>
                <CreateCollectionCheckbox
                    formVisible={formVisible}
                    toggleFormVisibility={toggleFormVisibility}
                />
                <CreateCollectionForm onHide={onHide} visible={formVisible} movieId={movieId} />
            </div>
        </Dialog>
    );
}

export default React.memo(AddToCollectionDialog);
