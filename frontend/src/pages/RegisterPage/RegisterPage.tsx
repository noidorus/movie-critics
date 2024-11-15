import { Link } from 'react-router-dom';
import RegisterForm from '@/widgets/AuthForms/ui/RegisterForm/RegisterForm';
import styles from './RegisterPage.module.css';

export default function RegisterPage() {
    return (
        <>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Добро пожаловать!</h1>
                <RegisterForm />
                <p className={styles.text}>
                    Уже есть аккаунт?
                    <Link className={styles.link} to="/login">
                        {' '}
                        Войти в аккаунт{' '}
                    </Link>
                </p>
            </div>
        </>
    );
}
