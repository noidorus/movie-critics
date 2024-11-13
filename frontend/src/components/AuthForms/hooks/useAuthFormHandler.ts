import { useCallback, useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { clearAuthError, setField, validateForm } from '../../../store/Auth/authSlice';
import { loginUser, registerUser } from '../../../store/Auth/authThunks';
import {
    selectAuthError,
    selectLoading,
    selectFormFields,
    selectFormErrors,
    selectIsFormValid,
} from '../../../store/Auth/authSelectors';

interface AuthFormHandlerProps {
    isLogin: boolean;
}

export const useAuthFormHandler = ({ isLogin }: AuthFormHandlerProps) => {
    const dispatch = useAppDispatch();
    const { login, email, password } = useAppSelector(selectFormFields);
    const errors = useAppSelector(selectFormErrors);
    const serverError = useAppSelector(selectAuthError);
    const loading = useAppSelector(selectLoading);
    const isFormValid = useAppSelector(selectIsFormValid);

    const [shouldSubmit, setShouldSubmit] = useState(false);

    useEffect(() => {
        dispatch(setField({ field: 'login', value: '' }));
        dispatch(setField({ field: 'password', value: '' }));
        dispatch(setField({ field: 'email', value: '' }));
        dispatch(clearAuthError());
    }, [dispatch]);

    const handleFieldChange = useCallback(
        (field: 'login' | 'email' | 'password', value: string) => {
            dispatch(setField({ field, value }));
        },
        [dispatch],
    );

    const handleSubmit = useCallback(
        (event: React.FormEvent) => {
            event.preventDefault();
            dispatch(validateForm(isLogin));
            setShouldSubmit(true);
        },
        [dispatch, isLogin],
    );

    useEffect(() => {
        if (!shouldSubmit || !isFormValid) {
            return;
        }

        const submitForm = async () => {
            try {
                if (isLogin) {
                    await dispatch(loginUser({ username: login, password })).unwrap();
                } else {
                    await dispatch(registerUser({ username: login, email, password })).unwrap();
                    await dispatch(loginUser({ username: login, password })).unwrap();
                }
            } finally {
                setShouldSubmit(false);
            }
        };

        submitForm();
    }, [isFormValid, shouldSubmit, isLogin, dispatch, login, email, password, errors]);

    return useMemo(
        () => ({
            login,
            email,
            password,
            handleFieldChange,
            handleSubmit,
            errors,
            serverError,
            loading,
        }),
        [login, email, password, handleFieldChange, handleSubmit, errors, serverError, loading],
    );
};
