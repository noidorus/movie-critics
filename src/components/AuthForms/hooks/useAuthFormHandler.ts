import zod from 'zod';
import { unwrapResult } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { clearAuthError, setField, setFormErrors } from '../../../store/Auth/authSlice';
import { loginUser, registerUser } from '../../../store/Auth/authThunks';
import { selectAuthError, selectLoading, selectFormFields, selectFormErrors } from '../../../store/Auth/authSelectors';
import { authSchema } from './validationSchema';

interface AuthFormHandlerProps {
    isLogin: boolean;
}

export const useAuthFormHandler = ({ isLogin }: AuthFormHandlerProps) => {
    const dispatch = useAppDispatch();
    const { login, email, password } = useAppSelector(selectFormFields);
    const errors = useAppSelector(selectFormErrors);
    const serverError = useAppSelector(selectAuthError);
    const loading = useAppSelector(selectLoading);

    useEffect(() => {
        dispatch(setField({ field: 'login', value: '' }));
        dispatch(setField({ field: 'password', value: '' }));
        dispatch(setField({ field: 'email', value: '' }));
        dispatch(clearAuthError());
    }, [dispatch]);

    const handleFieldChange = (field: 'login' | 'email' | 'password', value: string) => {
        dispatch(setField({ field, value }));
    };

    const validateForm = () => {
        try {
            authSchema.parse({ login, email: isLogin ? undefined : email, password });
            dispatch(setFormErrors({ login: '', email: '', password: '' }));
            return true;
        } catch (err) {
            if (err instanceof zod.ZodError) {
                const formErrors = {
                    login: err.formErrors.fieldErrors.login?.[0] || '',
                    email: err.formErrors.fieldErrors.email?.[0] || '',
                    password: err.formErrors.fieldErrors.password?.[0] || '',
                };
                dispatch(setFormErrors(formErrors));
            }
            return false;
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (validateForm()) {
            if (isLogin) {
                dispatch(loginUser({ username: login, password }));
            } else {
                const result = await dispatch(registerUser({ username: login, email, password }));
                unwrapResult(result);
                await dispatch(loginUser({ username: login, password }));
            }
        }
    };

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
