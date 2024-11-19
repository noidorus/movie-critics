import { useEffect, useRef } from 'react';
import { Toast } from 'primereact/toast';

type ToastNotificationParams = {
    severity?: 'success' | 'info' | 'warn' | 'error';
    summary?: string;
    detail: string | null;
    life?: number;
};

type UseToastNotificationsParams = {
    notification?: ToastNotificationParams | null;
    errors?: {
        serverError?: { message: string } | null;
        validationErrors?: Record<string, string>;
        createError?: string | null;
        addMovieError?: string | null;
    };
};

export const useToastNotifications = ({
    notification = null,
    errors = {},
}: UseToastNotificationsParams) => {
    const toast = useRef<Toast>(null);

    useEffect(() => {
        if (!notification?.detail) {
            return;
        }

        toast.current?.show({
            severity: notification.severity || 'info',
            summary: notification.summary || 'Уведомление',
            detail: notification.detail,
            life: notification.life || 3000,
        });
    }, [notification]);

    useEffect(() => {
        if (!errors.serverError) {
            return;
        }

        toast.current?.show({
            severity: 'error',
            summary: 'Ошибка',
            detail: errors.serverError.message,
            life: 3000,
        });
    }, [errors.serverError]);

    useEffect(() => {
        if (!errors.validationErrors) {
            return;
        }

        Object.values(errors.validationErrors)
            .filter((error) => error)
            .forEach((error) => {
                toast.current?.show({
                    severity: 'error',
                    summary: 'Ошибка валидации',
                    detail: error,
                    life: 3000,
                });
            });
    }, [errors.validationErrors]);

    useEffect(() => {
        if (!errors.createError) {
            return;
        }

        toast.current?.show({
            severity: 'error',
            summary: 'Ошибка создания подборки',
            detail: errors.createError,
            life: 3000,
        });
    }, [errors.createError]);

    useEffect(() => {
        if (!errors.addMovieError) {
            return;
        }

        toast.current?.show({
            severity: 'error',
            summary: 'Ошибка добавления фильма',
            detail: errors.addMovieError,
            life: 3000,
        });
    }, [errors.addMovieError]);

    return toast;
};
