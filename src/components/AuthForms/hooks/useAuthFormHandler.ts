import { unwrapResult } from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { clearAuthError, setField, validateForm } from '../../../store/Auth/authSlice';
import { loginUser, registerUser } from '../../../store/Auth/authThunks';
import { selectAuthError, selectLoading, selectFormFields, selectFormErrors, selectIsFormValid } from '../../../store/Auth/authSelectors';

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

    const handleFieldChange = (field: 'login' | 'email' | 'password', value: string) => {
        dispatch(setField({ field, value }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(validateForm(isLogin));
        setShouldSubmit(true);
    };

    useEffect(() => {
        if (shouldSubmit) {
            if (isFormValid) {
                if (isLogin) {
                    dispatch(loginUser({ username: login, password }));
                } else {
                    dispatch(registerUser({ username: login, email, password }))
                        .then((result) => unwrapResult(result))
                        .then(() => dispatch(loginUser({ username: login, password })));
                }
            }
            setShouldSubmit(false);
        }
    }, [isFormValid, shouldSubmit, isLogin, dispatch, login, email, password, errors]);

    return {
        login,
        email,
        password,
        handleFieldChange,
        handleSubmit,
        errors,
        serverError,
        loading,
    };
};
