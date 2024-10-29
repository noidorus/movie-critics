import { Button } from 'primereact/button';
import RegisterForm from '../../components/AuthForms/RegisterForm/RegisterForm';
import { useNavigate } from 'react-router-dom';
import styles from './RegisterPage.module.css';

export default function RegisterPage() {
    const navigate = useNavigate();

    return (
        <>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Добро пожаловать!</h1>
                <RegisterForm />
                <Button
                    label="Есть аккаунт?"
                    className={styles.button}
                    onClick={() => navigate('/login')}
                />
            </div>
        </>
    );
}
