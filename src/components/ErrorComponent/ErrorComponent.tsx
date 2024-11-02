import styles from './ErrorComponent.module.css';

type Props = {
    error: string;
};

export default function ErrorComponent({ error }: Props) {
    return <p className={styles.errorMessage}>{error}</p>;
}
