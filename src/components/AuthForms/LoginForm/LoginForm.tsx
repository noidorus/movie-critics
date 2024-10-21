import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { loginUser } from '../../../store/Auth/authThunks';
import { useAppDispatch } from '../../../store/hooks';
import { useNavigate } from 'react-router-dom';
import { useAuthFormHandler } from '../hooks/useAuthFormHandler';
import './LoginForm.css';

export default function LoginForm() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onSubmit = async (
        username: string,
        _email: string | null,
        password: string,
    ): Promise<void> => {
        console.log('submit');
        const loginResult = await dispatch(loginUser({ username, password }));
        if (loginUser.fulfilled.match(loginResult)) {
            navigate('/chat');
        }
    };

    const {
        login,
        password,
        handleLoginChange,
        handlePasswordChange,
        handleSubmit,
        errors,
        error,
    } = useAuthFormHandler({ onSubmit, isLogin: true });

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="input_wrapper">
                <label htmlFor="login" className="label">
                    Имя пользователя
                </label>
                <InputText
                    value={login}
                    onChange={handleLoginChange}
                    id="login"
                    placeholder="Никнейм"
                    className="input"
                />
                {errors.login && <p className="error">{errors.login}</p>}
            </div>
            <div className="input_wrapper">
                <label htmlFor="password" className="label">
                    Пароль
                </label>
                <InputText
                    value={password}
                    onChange={handlePasswordChange}
                    id="password"
                    placeholder="*********"
                    className="input"
                    type="password"
                />
                {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <Button type="submit" className="button" label="Войти" />
            {error && <p className="error">{error.message}</p>}
        </form>
    );
}
