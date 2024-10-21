import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { clearAuthError } from '../../../store/Auth/authSlice';
import { selectAuthError } from '../../../store/Auth/authSelectors';
import { useAuthForm } from './useAuthForm';

interface AuthFormHandlerProps {
    onSubmit: (username: string, email: string | null, password: string) => Promise<void>;
    isLogin: boolean;
}

export const useAuthFormHandler = ({ onSubmit, isLogin }: AuthFormHandlerProps) => {
    const dispatch = useAppDispatch();
    const error = useAppSelector(selectAuthError);
    const { login, setLogin, email, setEmail, password, setPassword, errors, validateForm } =
        useAuthForm(isLogin);

    useEffect(() => {
        dispatch(clearAuthError());
    }, [dispatch]);

    const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (validateForm()) {
            await onSubmit(login, isLogin ? null : email, password);
        }
    };

    return {
        login,
        email,
        password,
        handleLoginChange,
        handleEmailChange,
        handlePasswordChange,
        handleSubmit,
        errors,
        error,
    };
};
