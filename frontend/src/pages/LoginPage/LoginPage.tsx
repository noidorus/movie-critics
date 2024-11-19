import { Button } from 'primereact/button';
import { useAuthNavigation } from '@/shared/hooks/useAuthNavigation';
import LoginForm from '@/widgets/AuthForms/ui/LoginForm/LoginForm';
import styles from './LoginPage.module.css';

export default function LoginPage() {
    const handleNavigate = useAuthNavigation('/register');

    return (
        <>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>С возвращением!</h1>
                <LoginForm />
                <p className={styles.text}>
                    Еще нет аккаунта?
                    <Button className={styles.link} onClick={handleNavigate}>
                        {' '}
                        Зарегистрироваться{' '}
                    </Button>
                </p>
            </div>
        </>
    );
}
