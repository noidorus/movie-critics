import RegisterForm from '@/components/AuthForms/RegisterForm/RegisterForm';
import { Link } from 'react-router-dom';
import styles from './RegisterPage.module.css';

export default function RegisterPage() {
    return (
        <>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Добро пожаловать!</h1>
                <RegisterForm />
                <Link to="/login" className={`${styles.button} p-button p-component`}>
                    <span className="p-button-label">Есть аккаунт?</span>
                </Link>
            </div>
        </>
    );
}
