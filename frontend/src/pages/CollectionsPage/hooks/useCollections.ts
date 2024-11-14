import { useEffect, useMemo } from 'react';
import {
    selectCollections,
    selectLoading,
    selectError,
    selectIdle,
} from '@/app/store/Collections/collectionsSelectors';
import { fetchCollections } from '@/app/store/Collections/collectionsThunks';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';

export const useCollections = () => {
    const dispatch = useAppDispatch();

    const collections = useAppSelector(selectCollections);
    const idle = useAppSelector(selectIdle);
    const loading = useAppSelector(selectLoading);
    const error = useAppSelector(selectError);

    useEffect(() => {
        dispatch(fetchCollections());
    }, [dispatch]);

    return useMemo(
        () => ({
            collections,
            idle,
            loading,
            error,
        }),
        [collections, loading, error],
    );
};
