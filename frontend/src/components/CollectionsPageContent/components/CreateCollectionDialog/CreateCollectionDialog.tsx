import { Dialog } from 'primereact/dialog';
import CreateCollectionContent from '@/components/CreateCollectionContent/CreateCollectionContent';

type Props = {
    visible: boolean;
    onHide: () => void;
};

export default function CreateCollectionDialog({ visible, onHide }: Props) {

    return (
        <Dialog header="Создать подборку" visible={visible} onHide={onHide} draggable={false}>
            <CreateCollectionContent onHide={onHide} visible={visible} />
        </Dialog>
    );
}
