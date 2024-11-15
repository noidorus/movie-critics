import { Button } from 'primereact/button';
import { Collection } from '@/app/types/CollectionType';
import { useModal } from './hooks/useModal';
import classNames from 'classnames';
import ErrorComponent from '@/shared/ErrorComponent/ErrorComponent';
import Loader from '@/shared/Loader/Loader';
import CollectionPreview from './ui/CollectionPreview/CollectionPreview';
import CreateCollectionDialog from './ui/CreateCollectionDialog/CreateCollectionDialog';
import styles from './CollectionsPageContent.module.css';

type Props = {
    collections: Collection[];
    idle: boolean;
    loading: boolean;
    error: string | null;
    title: string;
    user?: boolean;
};

export default function CollectionsPageContent({
    collections,
    idle,
    loading,
    error,
    title,
    user,
}: Props) {
    const { visible, setVisible, onHide } = useModal();

    if (loading || idle) {
        return <Loader />;
    }

    if (error) {
        return <ErrorComponent error={error} />;
    }

    return (
        <>
            <div className={styles.titleContainer}>
                <h2 className={styles.title}>{title}</h2>
                {user && (
                    <Button
                        className={styles.button}
                        onClick={() => setVisible(true)}
                        label=" "
                    >
                        <span className={classNames(styles.icon, 'pi', 'pi-plus')}>
                        </span>
                    </Button>
                )}
            </div>
            {collections.length ? (
                <ul className={styles.list}>
                    {collections.map((collection) => (
                        <CollectionPreview key={collection.id} collection={collection} />
                    ))}
                </ul>
            ) : (
                <ErrorComponent error="Подборок пока нет. Создайте первую!" />
            )}
            <CreateCollectionDialog visible={visible} onHide={onHide} />
        </>
    );
}
