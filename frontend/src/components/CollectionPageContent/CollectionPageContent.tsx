import { useCollection } from './hooks/useCollection';
import { useCollectionModal } from './hooks/useCollectionModal';
import Loader from '@/components/Loader/Loader';
import ErrorComponent from '@/components/ErrorComponent/ErrorComponent';
import styles from './CollectionPageContent.module.css';
import MoviePreview from '@/components/MoviePreview/MoviePreview';
import { Button } from 'primereact/button';
import CollectionPageDialog from './components/CollectionPageDialog/CollectionPageDialog';
import ChangeVisibilityContent from './components/ChangeVisibilityContent/ChangeVisibilityContent';
import DeleteCollectionContent from './components/DeleteCollectionContent/DeleteCollectionContent';
import DeleteMovieContent from './components/DeleteMovieContent/DeleteMovieContent';

export default function CollectionPage() {
    const { collection, idle, loading, error, user, handleCollectionUpdate } = useCollection();
    const { hovered, setHovered, visible, dialogTitle, dialogContent, onHide, onShow } =
        useCollectionModal();

    if (loading || idle) {
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
            <div className={styles.titleContainer}>
                <h2 className={styles.title}>{collection.name}</h2>
                {user?.id === collection.authorId && (
                    <div className={styles.buttons}>
                        <Button
                            className={`${styles.button} pi pi-trash`}
                            onClick={() =>
                                onShow(
                                    'Удалить подборку',
                                    <DeleteCollectionContent onHide={onHide} id={collection.id} />,
                                )
                            }
                        />
                        {collection.private ? (
                            <Button
                                className={`${styles.button} pi ${hovered ? 'pi-lock-open' : 'pi-lock'}`}
                                onClick={() =>
                                    onShow(
                                        'Сделать подборку публичной?',
                                        <ChangeVisibilityContent
                                            onHide={onHide}
                                            onUpdate={handleCollectionUpdate}
                                            collectionId={collection.id}
                                            visibility={collection.private}
                                        />,
                                    )
                                }
                                onMouseEnter={() => setHovered(true)}
                                onMouseLeave={() => setHovered(false)}
                            />
                        ) : (
                            <Button
                                className={`${styles.button} pi ${hovered ? 'pi-lock' : 'pi-lock-open'}`}
                                onClick={() =>
                                    onShow(
                                        'Сделать подборку приватной?',
                                        <ChangeVisibilityContent
                                            onHide={onHide}
                                            onUpdate={handleCollectionUpdate}
                                            collectionId={collection.id}
                                            visibility={collection.private}
                                        />,
                                    )
                                }
                                onMouseEnter={() => setHovered(true)}
                                onMouseLeave={() => setHovered(false)}
                            />
                        )}
                    </div>
                )}
            </div>
            {collection.films.length === 0 ? (
                <p className={styles.emptyList}>Подборка пока пуста</p>
            ) : (
                <ul className={styles.list}>
                    {collection.films.map((movie) => (
                        <MoviePreview
                            key={movie.id}
                            movie={movie}
                            deleteButton={
                                user?.id === collection.authorId && (
                                    <Button
                                        icon="pi pi-trash"
                                        className=" p-button-danger"
                                        onClick={() =>
                                            onShow(
                                                'Удалить фильм?',
                                                <DeleteMovieContent
                                                    onHide={onHide}
                                                    onUpdate={handleCollectionUpdate}
                                                    collectionId={collection.id}
                                                    filmId={movie.id}
                                                />,
                                            )
                                        }
                                    />
                                )
                            }
                        />
                    ))}
                </ul>
            )}
            <CollectionPageDialog visible={visible} onHide={onHide} title={dialogTitle}>
                {dialogContent}
            </CollectionPageDialog>
        </div>
    );
}
