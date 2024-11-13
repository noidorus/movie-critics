// CollectionList.tsx
import { Checkbox } from 'primereact/checkbox';
import { CheckboxChangeEvent } from 'primereact/checkbox';
import styles from './CollectionList.module.css';
import { Collection } from '@/types/CollectionType';
import React from 'react';

type CollectionListProps = {
    collections: Collection[];
    movieId: number;
    onChange: (collectionId: number, movieId: number, checked: boolean) => void;
    errorCollectionId: number | null;
    error: string | null;
};

function CollectionList({ collections, movieId, onChange, errorCollectionId, error }: CollectionListProps) {
    return (
        <div className={styles.collections}>
            {collections.length === 0 && <p>У вас пока нет подборок</p>}
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
                            />
                            <label htmlFor={`collection-${collection.id}`}>
                                {collection.name}
                            </label>
                        </div>
                        {errorCollectionId === collection.id && (
                            <span className={styles.error}>
                                {error || 'Ошибка сервера. Попробуйте позже.'}
                            </span>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default React.memo(CollectionList);