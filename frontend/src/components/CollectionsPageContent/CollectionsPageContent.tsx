import { Collection } from '@/types/CollectionType';
import ErrorComponent from '@/components/ErrorComponent/ErrorComponent';
import Loader from '@/components/Loader/Loader';
import CollectionPreview from './components/CollectionPreview/CollectionPreview';
import styles from './CollectionsPageContent.module.css';
import { Button } from 'primereact/button';
import { useModal } from './hooks/useModal';
import CreateCollectionDialog from './components/CreateCollectionDialog/CreateCollectionDialog';

type Props = {
    collections: Collection[];
    loading: boolean;
    error: string | null;
    title: string;
    user?: boolean;
};

export default function CollectionsPageContent({
    collections,
    loading,
    error,
    title,
    user,
}: Props) {
    const { visible, setVisible, onHide } = useModal();

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <ErrorComponent error={error} />;
    }

    return (
        <>
            <div className={styles.titleContainer}>
                <p className={styles.title}>{title}</p>
                {user && (
                    <Button
                        className={`${styles.button} pi pi-plus`}
                        onClick={() => setVisible(true)}
                    />
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
