import { manageMovieRequestData } from '@/app/DTO/CollectionDTO';
import {
    selectActionError,
    selectCollectionUpdated,
} from '@/app/store/Collection/collectionSelectors';
import {
    addMovieToCollection,
    deleteMovieFromCollection,
} from '@/app/store/Collection/collectionThunks';
import { selectCollections } from '@/app/store/Collections/collectionsSelectors';
import { setCollectionUpdated } from '@/app/store/Collection/collectionSlice';
import { fetchCollectionsByMe } from '@/app/store/Collections/collectionsThunks';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { useCallback, useEffect, useMemo, useState } from 'react';

export const useCollections = () => {
    const dispatch = useAppDispatch();

    const collections = useAppSelector(selectCollections);
    const error = useAppSelector(selectActionError);
    const collectionUpdated = useAppSelector(selectCollectionUpdated);
    const [errorCollectionId, setErrorCollectionId] = useState<number | null>(null);

    const removeFromCollection = (collectionId: number, movieId: number) => {
        const data: manageMovieRequestData = { collectionId, filmId: movieId };
        dispatch(deleteMovieFromCollection(data))
            .unwrap()
            .catch(() => setErrorCollectionId(collectionId));
    };

    const addToCollection = (collectionId: number, movieId: number) => {
        const data: manageMovieRequestData = { collectionId, filmId: movieId };
        dispatch(addMovieToCollection(data))
            .unwrap()
            .catch(() => setErrorCollectionId(collectionId));
    };

    const onChange = useCallback(
        (collectionId: number, movieId: number, checked: boolean) => {
            setErrorCollectionId(null);
            if (checked) {
                addToCollection(collectionId, movieId);
            } else {
                removeFromCollection(collectionId, movieId);
            }
        },
        [addToCollection, removeFromCollection],
    );

    useEffect(() => {
        dispatch(fetchCollectionsByMe());
    }, [dispatch]);

    useEffect(() => {
        if (collectionUpdated) {
            dispatch(fetchCollectionsByMe());
            dispatch(setCollectionUpdated(false));
        }
    }, [collectionUpdated, dispatch]);

    return useMemo(
        () => ({ collections, onChange, error, errorCollectionId }),
        [collections, onChange, error, errorCollectionId],
    );
};
