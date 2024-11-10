import { Dialog } from 'primereact/dialog';

type Props = {
    visible: boolean;
    onHide: () => void;
    title: string;
    children: React.ReactNode;
};

export default function CollectionPageDialog({ visible, onHide, title, children }: Props) {
    return (
        <Dialog header={title} onHide={onHide} visible={visible} draggable={false}>
            {children}
        </Dialog>
    );
}
