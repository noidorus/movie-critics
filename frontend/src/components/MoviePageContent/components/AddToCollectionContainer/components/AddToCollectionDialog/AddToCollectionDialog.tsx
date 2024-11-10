import { Dialog } from "primereact/dialog";
import { Checkbox, CheckboxChangeEvent } from "primereact/checkbox";
import { useCollections } from "./hooks/useCollections";
import styles from './addToCollectionDialog.module.css';

type Props = {
    visible: boolean;
    onHide: () => void;
    movieId: number;
}

export default function AddToCollectionDialog({ visible, onHide, movieId }: Props) {
    const { collections, onChange, errorCollectionId, error } = useCollections();

    return (
        <Dialog header="Добавить в подборку" visible={visible} onHide={onHide} draggable={false}>
            <div className={styles.collections}>
                {collections.length === 0 && <p>У вас пока нет подборок</p>}
                {collections.map((collection) => {
                    const isChecked = collection.films.some(film => film.id === movieId);

                    return (
                        <div key={collection.id}>
                            <div className={styles.collection}>
                                <Checkbox 
                                   inputId={`collection-${collection.id}`}
                                   checked={isChecked}
                                   onChange={(e: CheckboxChangeEvent) => onChange(collection.id, movieId, e.checked || false)}
                                />
                                <label htmlFor={`collection-${collection.id}`}>{collection.name}</label>
                            </div>
                            {errorCollectionId === collection.id && (
                                <span className={styles.error}>{error || "Ошибка сервера. Попробуйте позже."}</span>
                            )}
                        </div>
                    );
                })}
            </div>
        </Dialog>
    );
}
