import { useEffect, useRef } from 'react';
import { Toast } from 'primereact/toast';

export const useToastNotifications = (createError: string | null, addMovieError: string | null) => {
    const toast = useRef<Toast>(null);

    useEffect(() => {
        if (createError) {
            toast.current?.show({
                severity: 'error',
                summary: 'Ошибка создания подборки',
                detail: createError,
                life: 3000,
            });
        }

        if (addMovieError) {
            toast.current?.show({
                severity: 'error',
                summary: 'Ошибка добавления фильма',
                detail: addMovieError,
                life: 3000,
            });
        }
    }, [createError, addMovieError]);

    return toast;
};
