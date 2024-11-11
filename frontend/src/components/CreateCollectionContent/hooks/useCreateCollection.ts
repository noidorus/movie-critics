import { FormEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
    setCollectionName,
    setIsPrivate,
    validateCollectionName,
} from '@/store/Collections/collectionsSlice';
import { createCollection } from '@/store/Collections/collectionsThunks';
import { CreateCollectionRequestData } from '@/DTO/CollectionsDTO';
import {
    selectActionError as selectCollectionsActionError,
    selectActionLoading as selectCollectionsActionLoading,
    selectFormError,
    selectCollectionName,
    selectIsPrivate,
} from '@/store/Collections/collectionsSelectors';
import {
    selectActionError as selectCollectionActionError,
    selectActionLoading as selectCollectionActionLoading,
} from '@/store/Collection/collectionSelectors';
import { addMovieToCollection } from '@/store/Collection/collectionThunks';

export const useCreateCollection = (onHide: () => void, movieId?: number) => {
    const dispatch = useAppDispatch();

    const collectionName = useAppSelector(selectCollectionName);
    const isPrivate = useAppSelector(selectIsPrivate);
    const createLoading = useAppSelector(selectCollectionsActionLoading);
    const createError = useAppSelector(selectCollectionsActionError);
    const formError = useAppSelector(selectFormError);

    const addMovieLoading = useAppSelector(selectCollectionActionLoading);
    const addMovieError = useAppSelector(selectCollectionActionError);

    const [shouldSubmit, setShouldSubmit] = useState(false);

    const onSubmit = useCallback(
        (e: FormEvent) => {
            e.preventDefault();
            setShouldSubmit(true);
            dispatch(validateCollectionName());
        },
        [dispatch],
    );

    useEffect(() => {
        if (shouldSubmit) {
            if (!formError) {
                const collectionData: CreateCollectionRequestData = {
                    name: collectionName,
                    private: isPrivate,
                };
    
                dispatch(createCollection(collectionData))
                    .unwrap()
                    .then((newCollection) => {
                        if (movieId) {
                            dispatch(addMovieToCollection({ id: newCollection.id, filmId: movieId }))
                                .unwrap()
                                .then(() => onHide());
                        } else {
                            onHide();
                        }
                    })
            }
            setShouldSubmit(false);
        }
    }, [shouldSubmit, formError, collectionName, isPrivate, movieId, dispatch, onHide]);

    const handleChangeName = useCallback(
        (name: string) => dispatch(setCollectionName(name)),
        [dispatch],
    );
    const handleChangePrivate = useCallback(
        (privacy: boolean) => dispatch(setIsPrivate(privacy)),
        [dispatch],
    );

    return useMemo(
        () => ({
            collectionName,
            setCollectionName: handleChangeName,
            isPrivate,
            setIsPrivate: handleChangePrivate,
            formError,
            createLoading,
            addMovieLoading,
            createError,
            addMovieError,
            onSubmit,
        }),
        [
            collectionName,
            isPrivate,
            formError,
            createLoading,
            addMovieLoading,
            createError,
            addMovieError,
            handleChangeName,
            handleChangePrivate,
            onSubmit,
        ],
    );
};
