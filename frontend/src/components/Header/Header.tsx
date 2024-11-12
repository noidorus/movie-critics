import { useCallback, useState } from 'react';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { logoutUser } from '@/store/Auth/authThunks';
import { selectUser } from '@/store/Auth/authSelectors';
import styles from './Header.module.css';

type HeaderProps = {
    activeTab?: string;
};

export default function Header({ activeTab }: HeaderProps) {
    const dispatch = useAppDispatch();
    const user = useAppSelector(selectUser);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleLogout = useCallback(async () => {
        await dispatch(logoutUser());
    }, [dispatch]);

    return (
        <div className={styles.header}>
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
                                    to="/collections/my"
                                    className={`${styles.button} ${activeTab === 'collections/my' ? styles.buttonChecked : ''}`}
                                >
                                    <span>Мои подборки</span>
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
    );
}
