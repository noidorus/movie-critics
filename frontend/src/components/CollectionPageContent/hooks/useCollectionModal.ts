import { useMemo, useState } from 'react';
import { clearActionError } from '@/store/Collection/collectionSlice';
import { useAppDispatch } from '@/store/hooks';

export const useCollectionModal = () => {
    const [visible, setVisible] = useState(false);
    const [dialogTitle, setDialogTitle] = useState('');
    const [action, setAction] = useState<() => void>(() => {});
    const dispatch = useAppDispatch();

    const onHideModal = () => {
        setDialogTitle('');
        setAction(() => {});
        setVisible(false);
    };

    const onShowModal = (title: string, action: () => void) => {
        setDialogTitle(title);
        dispatch(clearActionError());
        setAction(() => action);
        setVisible(true);
    };

    return useMemo(
        () => ({ visible, dialogTitle, action, onHideModal, onShowModal }),
        [visible, dialogTitle, action, onHideModal, onShowModal],
    );
};
