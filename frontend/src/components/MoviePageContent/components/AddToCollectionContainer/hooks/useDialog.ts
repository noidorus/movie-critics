import { useCallback, useMemo, useState } from 'react';

export const useDialog = () => {
    const [visible, setVisible] = useState(false);

    const onHide = useCallback(() => {
        setVisible(false);
    }, []);

    return useMemo(() => ({ visible, setVisible, onHide }), [visible, setVisible, onHide]);
};
