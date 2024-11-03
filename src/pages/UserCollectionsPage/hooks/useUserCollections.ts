import { useEffect, useMemo } from 'react';
import {
    selectCollections,
    selectLoading,
    selectError,
} from '@/store/Collections/collectionsSelectors';
import { fetchCollectionsByMe } from '@/store/Collections/collectionsThunks';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

export const useUserCollections = () => {
    const dispatch = useAppDispatch();

    const collections = useAppSelector(selectCollections);
    const loading = useAppSelector(selectLoading);
    const error = useAppSelector(selectError);

    useEffect(() => {
        dispatch(fetchCollectionsByMe());
    }, [dispatch]);

    return useMemo(
        () => ({
            collections,
            loading,
            error,
        }),
        [collections, loading, error],
    );
};
