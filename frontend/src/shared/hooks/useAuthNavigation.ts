import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { 
    setField, 
    clearAuthError 
} from "@/app/store/Auth/authSlice";
import { useAppDispatch } from "@/app/store/hooks";

export const useAuthNavigation = (navigateTo: string) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleNavigate = useCallback(async () => {
        try {
            await Promise.all([
                dispatch(setField({ field: 'login', value: '' })),
                dispatch(setField({ field: 'email', value: '' })),
                dispatch(setField({ field: 'password', value: '' })),
                dispatch(clearAuthError())
            ]);

            navigate(navigateTo);
        } catch (error) {
            //потом заменю на sentry
            console.error("Ошибка:", error);
        }
    }, [dispatch, navigate]);

    return handleNavigate;
};
