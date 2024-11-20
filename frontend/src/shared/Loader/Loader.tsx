import styles from './Loader.module.css';

const Loader = () => {
    return (
        <div className={styles.loaderContainer} role="presentation">
            <div className={styles.loader} data-testid="loader"></div>
        </div>
    );
};

export default Loader;
