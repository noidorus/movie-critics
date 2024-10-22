import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import { useAppDispatch } from '../../store/hooks';
import { logout } from '../../store/Auth/authThunks';

type HeaderProps = {
    activeTab: string;
};

export default function Header({ activeTab }: HeaderProps) {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await dispatch(logout());
        navigate('/login');
    };

    return (
        <div className="header">
            <div className="navigation">
                <p className="header_logo">MOVIE CRITICS</p>
                <div className="navigation_buttons">
                    <Button
                        type="button"
                        className={`header_button ${activeTab === 'movies' ? 'header_button_checked' : ''}`}
                        onClick={() => navigate('/movies')}
                    >
                        <span>Фильмы</span>
                    </Button>
                    <Button
                        type="button"
                        className={`header_button ${activeTab === 'rating' ? 'header_button_checked' : ''}`}
                        onClick={() => navigate('/rating')}
                    >
                        <span>Рейтинг</span>
                    </Button>
                    <Button
                        type="button"
                        className={`header_button ${activeTab === 'collections' ? 'header_button_checked' : ''}`}
                    >
                        <span>Подборки</span>
                    </Button>
                </div>
            </div>
            <div>
                <div className="navigation_buttons">
                    <Button type="button" className="header_button">
                        <span>Моя страница</span>
                    </Button>
                    <Button type="button" className="header_button" onClick={handleLogout}>
                        <span>Выйти</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}
