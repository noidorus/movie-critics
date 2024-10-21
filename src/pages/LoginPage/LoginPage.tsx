import { Button } from 'primereact/button';
import './LoginPage.css';
import LoginForm from '../../components/AuthForms/LoginForm/LoginForm';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const navigate = useNavigate();

    return (
        <>
            <div className="wrapper">
                <h1 className="title">С возвращением!</h1>
                <LoginForm />
                <Button
                    label="Нет аккаунта?"
                    className="button"
                    onClick={() => navigate('/register')}
                />
            </div>
        </>
    );
}
