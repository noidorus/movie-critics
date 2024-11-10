import { useState, useCallback } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { clearForm } from '@/store/Collections/collectionsSlice';

export const useModal = () => {
    const [visible, setVisible] = useState(false);
    const dispatch = useAppDispatch();

    const onHide = useCallback(() => {
        setVisible(false);
        dispatch(clearForm());
    }, [dispatch]);

    return {
        visible,
        setVisible,
        onHide,
    };
};
