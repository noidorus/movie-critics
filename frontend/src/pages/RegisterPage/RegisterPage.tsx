import { Link } from 'react-router-dom';
import RegisterForm from '@/widgets/AuthForms/ui/RegisterForm/RegisterForm';
import classNames from 'classnames';
import styles from './RegisterPage.module.css';

export default function RegisterPage() {
    return (
        <>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Добро пожаловать!</h1>
                <RegisterForm />
                <Link to="/login" className={classNames(styles.button, 'p-button', 'p-component')}>
                    <span className="p-button-label">Есть аккаунт?</span>
                </Link>
            </div>
        </>
    );
}
