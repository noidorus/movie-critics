import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { registerUser, loginUser } from '../../../store/Auth/authThunks';
import { useAppDispatch } from '../../../store/hooks';
import { useNavigate } from 'react-router-dom';
import { useAuthFormHandler } from '../hooks/useAuthFormHandler';
import styles from '../AuthForms.module.css';

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
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputWrapper}>
                <label htmlFor="login" className={styles.label}>
                    Имя пользователя
                </label>
                <InputText
                    value={login}
                    onChange={handleLoginChange}
                    id="login"
                    placeholder="Никнейм"
                    className={styles.input}
                />
                {errors.login && <p className={styles.error}>{errors.login}</p>}
            </div>
            <div className={styles.inputWrapper}>
                <label htmlFor="email" className={styles.label}>
                    Электронная почта
                </label>
                <InputText
                    value={email}
                    onChange={handleEmailChange}
                    id="email"
                    placeholder="example@example.com"
                    className={styles.input}
                />
                {errors.email && <p className={styles.error}>{errors.email}</p>}
            </div>
            <div className={styles.inputWrapper}>
                <label htmlFor="password" className={styles.label}>
                    Пароль
                </label>
                <InputText
                    value={password}
                    onChange={handlePasswordChange}
                    id="password"
                    placeholder="*********"
                    className={styles.input}
                    type="password"
                />
                {errors.password && <p className={styles.error}>{errors.password}</p>}
            </div>
            <Button type="submit" className={styles.button} label="Зарегистрироваться" />
            {error && <p className={styles.error}>{error.message}</p>}
        </form>
    );
}
