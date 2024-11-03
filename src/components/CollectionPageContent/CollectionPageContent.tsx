import { useCollection } from './hooks/useCollection';
import Loader from '@/components/Loader/Loader';
import ErrorComponent from '@/components/ErrorComponent/ErrorComponent';
import styles from './CollectionPageContent.module.css';
import MoviePreview from '@/components/MoviePreview/MoviePreview';

export default function CollectionPage() {
    const { collection, loading, error } = useCollection();

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <ErrorComponent error={error} />;
    }

    if (!collection) {
        return <ErrorComponent error="Коллекция не наидена" />;
    }

    return (
        <div>
            <h2 className={styles.title}>{collection.name}</h2>
            {collection.films.length === 0 ? (
                <p className={styles.emptyList}>Коллекция пока пуста</p>
            ) : (
                <ul className={styles.list}>
                    {collection.films.map((movie) => (
                        <MoviePreview key={movie.id} movie={movie} />
                    ))}
                </ul>
            )}
        </div>
    );
}
