import { useHeader } from './hooks/useHeader';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './Header.module.css';

type HeaderProps = {
    activeTab?: string;
};

export default function Header({ activeTab }: HeaderProps) {
    const { leftLinks, rightLinks, isMenuOpen, toggleMenu } = useHeader();

    return (
        <div className={styles.header}>
            <p className={styles.logo}>MOVIE CRITICS</p>
            <Button className={styles.menuButton} onClick={toggleMenu}>
                <span className={classNames('pi', 'pi-bars')}></span>
            </Button>
            <div className={classNames(styles.buttons, { [styles.open]: isMenuOpen })}>
                <div className={styles.leftButtons}>
                    {leftLinks.map((link) => (
                        <Link
                            key={link.key}
                            to={link.to}
                            className={classNames(styles.button, {
                                [styles.buttonChecked]: activeTab === link.key,
                            })}
                        >
                            <span>{link.label}</span>
                        </Link>
                    ))}
                </div>
                <div className={styles.rightButtons}>
                    {rightLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={link.to}
                            className={classNames(styles.button, {
                                [styles.buttonChecked]: activeTab === link.key,
                            })}
                            onClick={link.onClick}
                        >
                            <span>{link.label}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
