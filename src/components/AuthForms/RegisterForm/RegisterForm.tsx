import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { registerUser, loginUser } from '../../../store/Auth/authThunks';
import { useAppDispatch } from '../../../store/hooks';
import { useNavigate } from 'react-router-dom';
import { useAuthFormHandler } from '../hooks/useAuthFormHandler';
import './RegisterForm.css';

export default function RegisterForm() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onSubmit = async (
        username: string,
        email: string | null,
        password: string,
    ): Promise<void> => {
        if (email) {
            const registerResult = await dispatch(registerUser({ username, email, password }));
            if (registerUser.fulfilled.match(registerResult)) {
                const loginResult = await dispatch(loginUser({ username, password }));
                if (loginUser.fulfilled.match(loginResult)) {
                    navigate('/movies');
                }
            }
        }
    };

    const {
        login,
        email,
        password,
        handleLoginChange,
        handleEmailChange,
        handlePasswordChange,
        handleSubmit,
        errors,
        error,
    } = useAuthFormHandler({ onSubmit, isLogin: false });

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
                <label htmlFor="email" className="label">
                    Электронная почта
                </label>
                <InputText
                    value={email}
                    onChange={handleEmailChange}
                    id="email"
                    placeholder="example@example.com"
                    className="input"
                />
                {errors.email && <p className="error">{errors.email}</p>}
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
            <Button type="submit" className="button" label="Зарегистрироваться" />
            {error && <p className="error">{error.message}</p>}
        </form>
    );
}
