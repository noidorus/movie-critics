import { useState } from 'react';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { logout } from '../../store/Auth/authThunks';
import { selectUser } from '../../store/Auth/authSelectors';
import styles from './Header.module.css';

type HeaderProps = {
    activeTab?: string;
};

export default function Header({ activeTab }: HeaderProps) {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const user = useAppSelector(selectUser);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleLogout = async () => {
        await dispatch(logout());
        navigate('/login');
    };

    return (
        <div className={styles.header}>
            <div className={styles.navigation}>
                <p className={styles.logo}>MOVIE CRITICS</p>
                
                <Button className={styles.menuButton} onClick={toggleMenu}>
                    <span className="pi pi-bars"></span>
                </Button>

                <div className={`${styles.buttons} ${isMenuOpen ? styles.open : ''}`}>
                    <div className={styles.leftButtons}>
                        <Button
                            type="button"
                            className={`${styles.button} ${activeTab === 'movies' ? styles.buttonChecked : ''}`}
                            onClick={() => navigate('/movies')}
                        >
                            <span>Фильмы</span>
                        </Button>
                        <Button
                            type="button"
                            className={`${styles.button} ${activeTab === 'rating' ? styles.buttonChecked : ''}`}
                        >
                            <span>Рейтинг</span>
                        </Button>
                        <Button
                            type="button"
                            className={`${styles.button} ${activeTab === 'collections' ? styles.buttonChecked : ''}`}
                        >
                            <span>Подборки</span>
                        </Button>
                    </div>

                    <div className={styles.rightButtons}>
                        {user ? (
                            <>
                                <Button type="button" className={styles.button}>
                                    <span>Моя страница</span>
                                </Button>
                                <Button type="button" className={styles.button} onClick={handleLogout}>
                                    <span>Выйти</span>
                                </Button>
                            </>
                        ) : (
                            <Button type="button" className={styles.button} onClick={() => navigate('/login')}>
                                <span>Войти</span>
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
