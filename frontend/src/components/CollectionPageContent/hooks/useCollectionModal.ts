import { useMemo, useState } from 'react';
import { clearActionError } from '@/store/Collection/collectionSlice';
import { useAppDispatch } from '@/store/hooks';

export const useCollectionModal = () => {
    const [hovered, setHovered] = useState(false);
    const [visible, setVisible] = useState(false);
    const [dialogTitle, setDialogTitle] = useState('');
    const [dialogContent, setDialogContent] = useState<React.ReactNode>(null);
    const dispatch = useAppDispatch();

    const onHideModal = () => {
        setDialogTitle('');
        setDialogContent(null);
        setVisible(false);
    };

    const onShowModal = (title: string, content: React.ReactNode) => {
        setDialogTitle(title);
        dispatch(clearActionError());
        setDialogContent(content);
        setVisible(true);
    };

    return useMemo(
        () => ({ hovered, setHovered, visible, dialogTitle, dialogContent, onHideModal, onShowModal }),
        [hovered, setHovered, visible, dialogTitle, dialogContent, onHideModal, onShowModal],
    );
};
