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
    selectActionError,
    selectActionLoading,
    selectFormError,
    selectCollectionName,
    selectIsPrivate,
} from '@/store/Collections/collectionsSelectors';

export const useCreateCollection = (onHide: () => void) => {
    const dispatch = useAppDispatch();

    const collectionName = useAppSelector(selectCollectionName);
    const isPrivate = useAppSelector(selectIsPrivate);
    const loading = useAppSelector(selectActionLoading);
    const actionError = useAppSelector(selectActionError);
    const formError = useAppSelector(selectFormError);

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
                    .then(() => {
                        onHide();
                    });
            }
            setShouldSubmit(false);
        }
    }, [shouldSubmit, formError, collectionName, isPrivate, dispatch, onHide]);

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
            loading,
            actionError,
            onSubmit,
        }),
        [
            collectionName,
            isPrivate,
            formError,
            loading,
            actionError,
            handleChangeName,
            handleChangePrivate,
            onSubmit,
        ],
    );
};
