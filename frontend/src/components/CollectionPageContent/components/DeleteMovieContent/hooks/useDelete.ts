import { selectActionError, selectActionLoading } from '@/store/Collection/collectionSelectors';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useCallback, useMemo } from 'react';
import { deleteMovieFromCollection } from '@/store/Collection/collectionThunks';
import { manageMovieRequestData } from '@/DTO/CollectionDTO';

type Props = {
    collectionId: number;
    filmId: number;
    onHide: () => void;
    onUpdate: () => void;
};

export const useDelete = ({ collectionId, filmId, onHide, onUpdate }: Props) => {
    const dispatch = useAppDispatch();
    const loading = useAppSelector(selectActionLoading);
    const error = useAppSelector(selectActionError);

    const onDeleteMovie = useCallback(() => {
        const data: manageMovieRequestData = { collectionId, filmId };
        dispatch(deleteMovieFromCollection(data))
            .unwrap()
            .then(() => {
                onHide();
                onUpdate();
            });
    }, [dispatch, collectionId, onHide]);

    return useMemo(() => ({ loading, error, onDeleteMovie }), [loading, error, onDeleteMovie]);
};
