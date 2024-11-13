import { Button } from 'primereact/button';
import styles from './CollectionTitle.module.css';
import { Collection } from '@/types/CollectionType';

interface Props {
    collection: Collection;
    userId: number | undefined;
    onDeleteCollection: () => void;
    onToggleVisibility: () => void;
}

export default function CollectionTitle ({
    collection,
    userId,
    onDeleteCollection,
    onToggleVisibility,
}: Props) {
    return (
        <div className={styles.titleContainer}>
            <h2 className={styles.title}>{collection.name}</h2>
            {userId === collection.authorId && (
                <div className={styles.buttons}>
                    <Button
                        className={`${styles.button} pi pi-trash`}
                        onClick={onDeleteCollection}
                        label=" "
                    />
                    <Button
                        className={`${styles.button} pi ${collection.private ? 'pi-lock' : 'pi-lock-open'}` }
                        onClick={onToggleVisibility}
                        label=" "
                    />
                </div>
            )}
        </div>
    );
};
