import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { loginUser } from '../../../store/Auth/authThunks';
import { useAppDispatch } from '../../../store/hooks';
import { useNavigate } from 'react-router-dom';
import { useAuthFormHandler } from '../hooks/useAuthFormHandler';
import styles from '../AuthForms.module.css';

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
            navigate('/movies');
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
            <Button type="submit" className={styles.button} label="Войти" />
            {error && <p className={styles.error}>{error.message}</p>}
        </form>
    );
}
