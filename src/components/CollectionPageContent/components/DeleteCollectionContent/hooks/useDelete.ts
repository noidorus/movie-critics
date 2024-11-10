import { selectActionError, selectActionLoading } from '@/store/Collection/collectionSelectors';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useCallback, useMemo } from 'react';
import { deleteCollection } from '@/store/Collection/collectionThunks';
import { useNavigate } from 'react-router-dom';

type Props = {
    id: number;
    onHide: () => void;
};

export const useDelete = ({ id, onHide }: Props) => {
    const dispatch = useAppDispatch();
    const loading = useAppSelector(selectActionLoading);
    const error = useAppSelector(selectActionError);
    const navigate = useNavigate();

    const onDeleteCollection = useCallback(() => {
        dispatch(deleteCollection(id))
            .unwrap()
            .then(() => {
                navigate('/collections/my');
                onHide();
            });
    }, [dispatch, id, onHide]);

    return useMemo(
        () => ({ loading, error, onDeleteCollection }),
        [loading, error, onDeleteCollection],
    );
};
