import { useEffect, useRef } from 'react';
import { Toast } from 'primereact/toast';

interface ToastNotificationParams {
    severity?: 'success' | 'info' | 'warn' | 'error';
    summary?: string;
    detail: string | null;
    life?: number;
}

export const useToastNotifications = (notification: ToastNotificationParams | null) => {
    const toast = useRef<Toast>(null);

    useEffect(() => {
        if (!notification || !notification.detail) {
            return;
        }

        toast.current?.show({
            severity: notification.severity || 'info',
            summary: notification.summary || 'Уведомление',
            detail: notification.detail,
            life: notification.life || 3000,
        });
    }, [notification]);

    return toast;
};
