import { useCollection } from './hooks/useCollection';
import { useCollectionModal } from './hooks/useCollectionModal';
import { useAction } from './hooks/useAction';
import Loader from '@/components/Loader/Loader';
import ErrorComponent from '@/components/ErrorComponent/ErrorComponent';
import CollectionPageDialog from './components/CollectionPageDialog/CollectionPageDialog';
import CollectionMovieList from './components/CollectionMovieList/CollectionMovieList';
import CollectionTitle from './components/CollectionTitle/CollectionTitle';

export default function CollectionPage() {
    const { collection, idle, loading, error, user, handleCollectionUpdate } = useCollection();
    const { visible, dialogTitle, action, onHideModal, onShowModal } =
        useCollectionModal();
    const { actionLoading, actionError, handleToggleVisibilityClick, handleDeleteCollectionClick, handleDeleteMovieClick } = useAction({ onHideModal, onUpdate: handleCollectionUpdate, onShowModal });

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
            <CollectionTitle
                collection={collection}
                userId={user?.id}
                onDeleteCollection={() => handleDeleteCollectionClick(collection.id)}
                onToggleVisibility={() => handleToggleVisibilityClick(collection)}
            />
            <CollectionMovieList films={collection.films} userId={user?.id} onDeleteMovie={(movieId: number) => handleDeleteMovieClick(collection.id, movieId)} />
            <CollectionPageDialog
                visible={visible}
                onHideModal={onHideModal}
                title={dialogTitle}
                handleAction={action}
                loading={actionLoading}
                error={actionError}
            />
        </div>
    );
}
