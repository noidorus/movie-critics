import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
    selectCollection,
    selectError,
    selectLoading,
} from '@/store/Collection/collectionSelectors';
import { fetchCollection } from '@/store/Collection/collectionThunks';
import { useEffect, useMemo } from 'react';

export const useCollection = () => {
    const { id } = useParams<{ id: string }>();

    const dispatch = useAppDispatch();

    const collection = useAppSelector(selectCollection);
    const loading = useAppSelector(selectLoading);
    const error = useAppSelector(selectError);

    useEffect(() => {
        dispatch(fetchCollection(Number(id)));
    }, [dispatch, id]);

    return useMemo(() => ({ collection, loading, error }), [collection, loading, error]);
};
