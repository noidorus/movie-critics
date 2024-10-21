import { useReducer } from 'react';
import zod from 'zod';
import { authFormReducer } from './authFormReducer';

const authSchema = zod.object({
    login: zod
        .string()
        .min(6, 'Имя пользователя должно быть длиннее или равно 6 символам')
        .max(20, 'Имя пользователя не должно превышать 20 символов')
        .regex(
            /^[0-9A-Za-z]$/,
            'Имя пользователя должно содержать только английские буквы и цифры',
        ),
    email: zod.string().email('Введите корректную почту').optional(),
    password: zod.string().min(1, 'Введите пароль'),
});

export function useAuthForm(isLogin: boolean) {
    const [state, dispatch] = useReducer(authFormReducer, {
        login: '',
        email: '',
        password: '',
        errors: { login: '', email: '', password: '' },
    });

    const validateForm = (): boolean => {
        try {
            const formData = {
                login: state.login,
                email: isLogin ? undefined : state.email,
                password: state.password,
            };
            authSchema.parse(formData);

            dispatch({ type: 'SET_ERRORS', payload: { login: '', email: '', password: '' } });
            return true;
        } catch (err) {
            if (err instanceof zod.ZodError) {
                const newErrors = {
                    login: err.formErrors.fieldErrors.login?.[0] || '',
                    email: err.formErrors.fieldErrors.email?.[0] || '',
                    password: err.formErrors.fieldErrors.password?.[0] || '',
                };
                dispatch({ type: 'SET_ERRORS', payload: newErrors });
            }
            return false;
        }
    };

    return {
        login: state.login,
        setLogin: (login: string) => dispatch({ type: 'SET_LOGIN', payload: login }),
        email: state.email,
        setEmail: (email: string) => dispatch({ type: 'SET_EMAIL', payload: email }),
        password: state.password,
        setPassword: (password: string) => dispatch({ type: 'SET_PASSWORD', payload: password }),
        errors: state.errors,
        validateForm,
    };
}
