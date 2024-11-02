import { useState } from 'react';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { logout } from '../../store/Auth/authThunks';
import { selectUser } from '../../store/Auth/authSelectors';
import styles from './Header.module.css';

type HeaderProps = {
    activeTab?: string;
};

export default function Header({ activeTab }: HeaderProps) {
    const dispatch = useAppDispatch();
    const user = useAppSelector(selectUser);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleLogout = async () => {
        await dispatch(logout());
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
                        <Link
                            to="/movies"
                            className={`${styles.button} ${activeTab === 'movies' ? styles.buttonChecked : ''}`}
                        >
                            <span>Фильмы</span>
                        </Link>
                        <Link
                            to="/rating"
                            className={`${styles.button} ${activeTab === 'rating' ? styles.buttonChecked : ''}`}
                        >
                            <span>Рейтинг</span>
                        </Link>
                        <Link
                            to="/collections"
                            className={`${styles.button} ${activeTab === 'collections' ? styles.buttonChecked : ''}`}
                        >
                            <span>Подборки</span>
                        </Link>
                    </div>

                    <div className={styles.rightButtons}>
                        {user ? (
                            <>
                                <Link
                                    to="/profile"
                                    className={`${styles.button} ${activeTab === 'profile' ? styles.buttonChecked : ''}`}
                                >
                                    <span>Моя страница</span>
                                </Link>
                                <Link to="/login" className={styles.button} onClick={handleLogout}>
                                    <span>Выйти</span>
                                </Link>
                            </>
                        ) : (
                            <Link to="/login" className={styles.button}>
                                <span>Войти</span>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
