import { useEffect, useMemo } from 'react';
import {
    selectCollections,
    selectLoading,
    selectError,
    selectCollectionsUpdated,
    selectIdle,
} from '@/store/Collections/collectionsSelectors';
import { fetchCollectionsByMe } from '@/store/Collections/collectionsThunks';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setCollectionsUpdated } from '@/store/Collections/collectionsSlice';

export const useUserCollections = () => {
    const dispatch = useAppDispatch();

    const collections = useAppSelector(selectCollections);
    const idle = useAppSelector(selectIdle);
    const loading = useAppSelector(selectLoading);
    const error = useAppSelector(selectError);
    const collectionsUpdated = useAppSelector(selectCollectionsUpdated);

    useEffect(() => {
        dispatch(fetchCollectionsByMe());
    }, [dispatch]);

    useEffect(() => {
        if (collectionsUpdated) {
            dispatch(fetchCollectionsByMe());
            dispatch(setCollectionsUpdated(false));
        }
    }, [collectionsUpdated, dispatch]);

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
