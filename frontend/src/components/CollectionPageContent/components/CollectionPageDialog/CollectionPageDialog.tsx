import { Dialog } from 'primereact/dialog';

type Props = {
    visible: boolean;
    onHideModal: () => void;
    title: string;
    children: React.ReactNode;
};

export default function CollectionPageDialog({ visible, onHideModal, title, children }: Props) {
    return (
        <Dialog header={title} onHide={onHideModal} visible={visible} draggable={false}>
            {children}
        </Dialog>
    );
}
