import { Collection } from '@/types/CollectionType';
import styles from './CollectionPreview.module.css';

type Props = {
    collection: Collection;
};

export default function CollectionPreview({ collection }: Props) {
    const previewMovies = collection.films ? collection.films.slice(0, 3) : [];

    return (
        <li className={styles.collection}>
            <div className={styles.images}>
                {previewMovies.map((movie) => (
                    <img
                        key={movie.id}
                        src={movie.posterUrlPreview}
                        alt={`Постер фильма с id ${movie.id}`}
                        className={styles.poster}
                    />
                ))}
            </div>
            <a href={`/collections/${collection.id}`} className={styles.title}>
                {collection.name}
            </a>
            <p className={styles.author}>Автор: {collection.author.username}</p>
        </li>
    );
}
