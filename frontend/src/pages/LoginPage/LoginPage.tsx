import { Link } from 'react-router-dom';
import LoginForm from '@/widgets/AuthForms/ui/LoginForm/LoginForm';
import styles from './LoginPage.module.css';

export default function LoginPage() {
    return (
        <>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>С возвращением!</h1>
                <LoginForm />
                <p className={styles.text}>Еще нет аккаунта?       
                    <Link className={styles.link} to="/register"> Зарегистрироваться </Link>
                </p>
            </div>
        </>
    );
}
