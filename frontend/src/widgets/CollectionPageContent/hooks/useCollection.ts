import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import {
    selectCollection,
    selectError,
    selectLoading,
    selectCollectionUpdated,
    selectIdle,
} from '@/app/store/Collection/collectionSelectors';
import { selectUser } from '@/app/store/Auth/authSelectors';
import { setCollectionUpdated } from '@/app/store/Collection/collectionSlice';
import { fetchCollection } from '@/app/store/Collection/Thunks/fetchCollection';
import { useCallback, useEffect, useMemo } from 'react';

export const useCollection = () => {
    const { id } = useParams<{ id: string }>();

    const dispatch = useAppDispatch();

    const collection = useAppSelector(selectCollection);
    const idle = useAppSelector(selectIdle);
    const loading = useAppSelector(selectLoading);
    const error = useAppSelector(selectError);
    const user = useAppSelector(selectUser);
    const collectionUpdated = useAppSelector(selectCollectionUpdated);

    useEffect(() => {
        dispatch(fetchCollection(Number(id)));
    }, [dispatch, id]);

    useEffect(() => {
        if (collectionUpdated && id) {
            dispatch(fetchCollection(Number(id)));
            dispatch(setCollectionUpdated(false));
        }
    }, [collectionUpdated, dispatch, id]);

    const handleCollectionUpdate = useCallback(() => {
        dispatch(setCollectionUpdated(true));
    }, [dispatch]);

    return useMemo(
        () => ({ collection, idle, loading, error, user, handleCollectionUpdate }),
        [collection, idle, loading, error, user, handleCollectionUpdate],
    );
};
