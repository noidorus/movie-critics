import { useEffect, useRef } from 'react';
import { Toast } from 'primereact/toast';

export const useToastNotifications = (error: string | null) => {
    const toast = useRef<Toast>(null);

    useEffect(() => {
        if (error) {
            toast.current?.show({
                severity: 'error',
                summary: 'Ошибка при выставлении рейтинга',
                detail: error,
                life: 3000,
            });
        }
    }, [error]);

    return toast;
};
