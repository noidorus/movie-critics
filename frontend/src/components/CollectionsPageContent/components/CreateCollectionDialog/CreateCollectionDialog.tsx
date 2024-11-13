import { Dialog } from 'primereact/dialog';
import CreateCollectionContent from '@/components/CreateCollectionContent/CreateCollectionContent';
import React from 'react';

type Props = {
    visible: boolean;
    onHide: () => void;
};

function CreateCollectionDialog({ visible, onHide }: Props) {

    return (
        <Dialog header="Создать подборку" visible={visible} onHide={onHide} draggable={false}>
            <CreateCollectionContent onHide={onHide} visible={visible} />
        </Dialog>
    );
}

export default React.memo(CreateCollectionDialog);
