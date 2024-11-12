import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectActionLoading, selectActionError } from '@/store/Collection/collectionSelectors';
import { changeVisibility } from '@/store/Collection/collectionThunks';
import { useCallback, useMemo } from 'react';
import { visibilityRequestData } from '@/DTO/CollectionDTO';

type Props = {
    id: number;
    visibility: boolean;
    onHideModal: () => void;
    onUpdate: () => void;
};

export const useVisibility = ({ id, visibility, onHideModal, onUpdate }: Props) => {
    const dispatch = useAppDispatch();
    const loading = useAppSelector(selectActionLoading);
    const error = useAppSelector(selectActionError);

    const handleToggleVisibility = useCallback(() => {
        const data: visibilityRequestData = { id, private: !visibility };
        dispatch(changeVisibility(data))
            .unwrap()
            .then(() => {
                onHideModal();
                onUpdate();
            });
    }, [dispatch, id, onHideModal, onUpdate, visibility]);

    return useMemo(
        () => ({ loading, error, handleToggleVisibility }),
        [loading, error, handleToggleVisibility],
    );
};
