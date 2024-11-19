import { FormEvent, useCallback, useEffect, useMemo, useState } from 'react';
import * as Sentry from '@sentry/react';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import {
    setCollectionName,
    setIsPrivate,
    validateCollectionName,
} from '@/app/store/Collections/collectionsSlice';
import { createCollection } from '@/app/store/Collections/Thunks/createCollection';
import { CreateCollectionRequestData } from '@/app/DTO/CollectionsDTO';
import {
    selectActionError as selectCollectionsActionError,
    selectActionLoading as selectCollectionsActionLoading,
    selectFormError,
    selectCollectionName,
    selectIsPrivate,
} from '@/app/store/Collections/collectionsSelectors';
import {
    selectActionError as selectCollectionActionError,
    selectActionLoading as selectCollectionActionLoading,
} from '@/app/store/Collection/collectionSelectors';
import { addMovieToCollection } from '@/app/store/Collection/Thunks/addMovieToCollection';

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
        if (!shouldSubmit || formError) {
            return;
        }

        const submitCollection = async () => {
            const collectionData: CreateCollectionRequestData = {
                name: collectionName,
                private: isPrivate,
            };

            try {
                const newCollection = await dispatch(createCollection(collectionData)).unwrap();

                if (movieId) {
                    await dispatch(
                        addMovieToCollection({ collectionId: newCollection.id, filmId: movieId }),
                    ).unwrap();
                }

                onHide();
            } catch (error) {
                Sentry.captureException(error);
            } finally {
                setShouldSubmit(false);
            }
        };

        submitCollection();
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
