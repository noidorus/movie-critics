import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useAuthFormHandler } from '../../hooks/useAuthFormHandler';
import styles from '../../AuthForms.module.css';
import { useToastNotifications } from '@/shared/hooks/useToastNotifications';
import { Toast } from 'primereact/toast';

export default function LoginForm() {
    const { login, password, handleFieldChange, handleSubmit, errors, serverError, loading } =
        useAuthFormHandler({ isLogin: true });

    const toast = useToastNotifications({
        errors: {
            serverError,
            validationErrors: errors,
        },
    });

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <Toast ref={toast} />
            <div className={styles.inputWrapper}>
                <label htmlFor="login" className={styles.label}>
                    Имя пользователя
                </label>
                <InputText
                    value={login}
                    onChange={(e) => handleFieldChange('login', e.target.value)}
                    id="login"
                    placeholder="Имя"
                    className={styles.input}
                />
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
            </div>
            <Button
                type="submit"
                className={styles.button}
                label={loading ? 'Загрузка...' : 'Войти'}
                disabled={loading}
            />
        </form>
    );
}
