import { Button } from 'primereact/button';
import { useAuthNavigation } from '@/shared/hooks/useAuthNavigation';
import RegisterForm from '@/widgets/AuthForms/ui/RegisterForm/RegisterForm';
import styles from './RegisterPage.module.css';

export default function RegisterPage() {
    const handleNavigate = useAuthNavigation('/login');

    return (
        <>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Добро пожаловать!</h1>
                <RegisterForm />
                <p className={styles.text}>
                    Уже есть аккаунт?
                    <Button className={styles.link} onClick={handleNavigate}>
                        {' '}
                        Войти в аккаунт{' '}
                    </Button>
                </p>
            </div>
        </>
    );
}
