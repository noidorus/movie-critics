import { Link } from 'react-router-dom';
import LoginForm from '@/components/AuthForms/LoginForm/LoginForm';
import classNames from 'classnames';
import styles from './LoginPage.module.css';

export default function LoginPage() {
    return (
        <>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>С возвращением!</h1>
                <LoginForm />
                <Link to="/register" className={classNames(styles.button, 'p-button', 'p-component')}>
                    <span className="p-button-label">Нет аккаунта?</span>
                </Link>
            </div>
        </>
    );
}
