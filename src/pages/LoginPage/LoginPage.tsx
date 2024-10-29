import { Button } from 'primereact/button';
import LoginForm from '../../components/AuthForms/LoginForm/LoginForm';
import { useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';

export default function LoginPage() {
    const navigate = useNavigate();

    return (
        <>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>С возвращением!</h1>
                <LoginForm />
                <Button
                    label="Нет аккаунта?"
                    className={styles.button}
                    onClick={() => navigate('/register')}
                />
            </div>
        </>
    );
}
