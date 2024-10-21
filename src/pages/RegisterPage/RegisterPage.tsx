import { Button } from 'primereact/button';
import './RegisterPage.css';
import RegisterForm from '../../components/AuthForms/RegisterForm/RegisterForm';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
    const navigate = useNavigate();

    return (
        <>
            <div className="wrapper">
                <h1 className="title">Добро пожаловать!</h1>
                <RegisterForm />
                <Button
                    label="Есть аккаунт?"
                    className="button"
                    onClick={() => navigate('/login')}
                />
            </div>
        </>
    );
}
