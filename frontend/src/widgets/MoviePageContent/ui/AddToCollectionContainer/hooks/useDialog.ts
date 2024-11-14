import { clearForm } from '@/app/store/Collections/collectionsSlice';
import { useAppDispatch } from '@/app/store/hooks';
import { useCallback, useMemo, useState } from 'react';

export const useDialog = () => {
    const [visible, setVisible] = useState(false);
    const dispatch = useAppDispatch();

    const onHide = useCallback(() => {
        setVisible(false);
        dispatch(clearForm());
    }, []);

    return useMemo(() => ({ visible, setVisible, onHide }), [visible, setVisible, onHide]);
};
