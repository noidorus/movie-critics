import { useRef, useEffect } from 'react';
import { Toast } from 'primereact/toast';
import { AuthError } from '@/app/DTO/AuthDTO';

export const useToastNotifications = (
    serverError: AuthError | null,
    validationErrors: Record<string, string>,
) => {
    const toast = useRef<Toast | null>(null);

    useEffect(() => {
        if (serverError && toast.current) {
            toast.current.show({
                severity: 'error',
                summary: 'Ошибка',
                detail: serverError.message,
                life: 3000,
            });
        }
    }, [serverError]);

    useEffect(() => {
        if (toast.current && validationErrors) {
            Object.values(validationErrors)
                .filter((error) => error)
                .forEach((error) => {
                    toast.current?.show({
                        severity: 'error',
                        summary: 'Ошибка валидации',
                        detail: error,
                        life: 3000,
                    });
                });
        }
    }, [validationErrors]);

    return toast;
};
