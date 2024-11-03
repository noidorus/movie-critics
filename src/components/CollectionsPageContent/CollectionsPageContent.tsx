import { Collection } from '@/types/CollectionType';
import ErrorComponent from '@/components/ErrorComponent/ErrorComponent';
import Loader from '@/components/Loader/Loader';
import CollectionPreview from './components/CollectionPreview/CollectionPreview';
import styles from './CollectionsPageContent.module.css';

type Props = {
    collections: Collection[];
    loading: boolean;
    error: string | null;
    title: string;
};

export default function CollectionsPageContent({ collections, loading, error, title }: Props) {
    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <ErrorComponent error={error} />;
    }

    if (collections.length === 0) {
        return <ErrorComponent error="Коллекций пока нет. Создайте первую!" />;
    }

    return (
        <>
            <p className={styles.title}>{title}</p>
            <ul className={styles.list}>
                {collections.map((collection) => (
                    <CollectionPreview key={collection.id} collection={collection} />
                ))}
            </ul>
        </>
    );
}
