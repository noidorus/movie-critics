import * as Sentry from '@sentry/react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './store';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export const DEFAULT_ERROR_MESSAGE = 'Ошибка сервера. Попробуйте позже или обратитесь в поддержку.';

export const handleFetchError = (error: unknown) => {
    Sentry.captureException(error);

    if (error instanceof TypeError) {
        return { message: DEFAULT_ERROR_MESSAGE, name: 'TypeError' };
    }
    return { message: (error as Error).message || 'Неизвестная ошибка', name: 'Error' };
};
