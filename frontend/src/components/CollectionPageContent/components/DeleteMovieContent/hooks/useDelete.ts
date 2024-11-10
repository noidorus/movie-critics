import { selectActionError, selectActionLoading } from '@/store/Collection/collectionSelectors';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useCallback, useMemo } from 'react';
import { deleteMovieFromCollection } from '@/store/Collection/collectionThunks';
import { manageMovieRequestData } from '@/DTO/CollectionDTO';

type Props = {
    id: number;
    filmId: number;
    onHide: () => void;
    onUpdate: () => void;
};

export const useDelete = ({ id, filmId, onHide, onUpdate }: Props) => {
    const dispatch = useAppDispatch();
    const loading = useAppSelector(selectActionLoading);
    const error = useAppSelector(selectActionError);

    const onDeleteMovie = useCallback(() => {
        const data: manageMovieRequestData = { id, filmId };
        dispatch(deleteMovieFromCollection(data))
            .unwrap()
            .then(() => {
                onHide();
                onUpdate();
            });
    }, [dispatch, id, onHide]);

    return useMemo(() => ({ loading, error, onDeleteMovie }), [loading, error, onDeleteMovie]);
};
