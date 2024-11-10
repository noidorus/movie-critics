import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useAuthFormHandler } from '../hooks/useAuthFormHandler';
import styles from '../AuthForms.module.css';

export default function LoginForm() {
    const { login, password, handleFieldChange, handleSubmit, errors, serverError, loading } =
        useAuthFormHandler({ isLogin: true });

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputWrapper}>
                <label htmlFor="login" className={styles.label}>
                    Имя пользователя
                </label>
                <InputText
                    value={login}
                    onChange={(e) => handleFieldChange('login', e.target.value)}
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
                    onChange={(e) => handleFieldChange('password', e.target.value)}
                    id="password"
                    placeholder="*********"
                    className={styles.input}
                    type="password"
                />
                {errors.password && <p className={styles.error}>{errors.password}</p>}
            </div>
            <Button
                type="submit"
                className={styles.button}
                label={loading ? 'Загрузка...' : 'Войти'}
                disabled={loading}
            />
            {serverError && <p className={styles.error}>{serverError.message}</p>}
        </form>
    );
}
