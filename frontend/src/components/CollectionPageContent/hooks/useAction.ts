import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectActionLoading, selectActionError } from '@/store/Collection/collectionSelectors';
import { changeVisibility, deleteCollection, deleteMovieFromCollection } from '@/store/Collection/collectionThunks';
import { useCallback } from 'react';
import { manageMovieRequestData, visibilityRequestData } from '@/DTO/CollectionDTO';
import { useNavigate } from 'react-router-dom';
import { Collection } from '@/types/CollectionType';

type Props = {
    onHideModal: () => void;
    onUpdate: () => void;
    onShowModal: (title: string, action: () => void) => void;
};

export const useAction = ({ onHideModal, onUpdate, onShowModal }: Props) => {
    const dispatch = useAppDispatch();
    const actionLoading = useAppSelector(selectActionLoading);
    const actionError = useAppSelector(selectActionError);
    const navigate = useNavigate();

    const handleToggleVisibility = useCallback((collectionId: number, visibility: boolean) => {
        const data: visibilityRequestData = { collectionId, private: !visibility };
        dispatch(changeVisibility(data))
            .unwrap()
            .then(() => {
                onHideModal();
                onUpdate();
            });
    }, [dispatch, onHideModal, onUpdate]);

    const handleDeleteCollection = useCallback((collectionId: number) => {
        dispatch(deleteCollection(collectionId))
            .unwrap()
            .then(() => {
                navigate('/collections/my');
                onHideModal();
            });
    }, [dispatch, onHideModal, navigate]);

    const handleDeleteMovie = useCallback((collectionId: number, filmId: number) => {
        const data: manageMovieRequestData = { collectionId, filmId };
        dispatch(deleteMovieFromCollection(data))
            .unwrap()
            .then(() => {
                onHideModal();
                onUpdate();
            });
    }, [dispatch, onHideModal, onUpdate]);

    const handleDeleteMovieClick = useCallback((collectionId: number, movieId: number) => {
        onShowModal('Удалить фильм', () => handleDeleteMovie(collectionId, movieId));
    }, [handleDeleteMovie, onShowModal]);

    const handleDeleteCollectionClick = useCallback((collectionId: number) => {
        onShowModal('Удалить подборку', () => handleDeleteCollection(collectionId));
    }, [handleDeleteCollection, onShowModal]);

    const handleToggleVisibilityClick = useCallback((collection: Collection) => {
        const title = collection.private 
            ? 'Сделать подборку публичной?' 
            : 'Сделать подборку приватной?';
        onShowModal(title, () => handleToggleVisibility(collection.id, collection.private));
    }, [handleToggleVisibility, onShowModal]);

    return {
        actionLoading, 
        actionError, 
        handleToggleVisibilityClick, 
        handleDeleteCollectionClick, 
        handleDeleteMovieClick 
    };
};
