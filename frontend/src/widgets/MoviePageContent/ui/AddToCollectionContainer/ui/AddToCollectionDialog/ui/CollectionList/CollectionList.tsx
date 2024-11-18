import { Checkbox } from 'primereact/checkbox';
import { CheckboxChangeEvent } from 'primereact/checkbox';
import { Collection } from '@/app/types/CollectionType';
import { useToastNotifications } from '@/shared/hooks/useToastNotifications';
import { Toast } from 'primereact/toast';
import React from 'react';
import styles from './CollectionList.module.css';

type CollectionListProps = {
    collections: Collection[];
    movieId: number;
    onChange: (collectionId: number, movieId: number, checked: boolean) => void;
    errorCollectionId: number | null;
    error: string | null;
};

function CollectionList({ collections, movieId, onChange, error }: CollectionListProps) {
    const toast = useToastNotifications(
        error ? { severity: 'error', summary: 'Ошибка', detail: error } : null,
    );

    return (
        <div className={styles.collections}>
            <Toast ref={toast} />
            {!collections.length && <p>У вас пока нет подборок</p>}
            {collections.map((collection) => {
                const isChecked = collection.films.some((film) => film.id === movieId);

                return (
                    <div key={collection.id}>
                        <div className={styles.collection}>
                            <Checkbox
                                inputId={`collection-${collection.id}`}
                                checked={isChecked}
                                onChange={(e: CheckboxChangeEvent) =>
                                    onChange(collection.id, movieId, e.checked || false)
                                }
                                className={styles.checkbox}
                            />
                            <label htmlFor={`collection-${collection.id}`}>{collection.name}</label>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default React.memo(CollectionList);
