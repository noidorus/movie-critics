import { useCallback, useMemo, useState } from "react";

export const useFormVisibility = () => {
    const [formVisible, setFormVisible] = useState(false);

    const toggleFormVisibility = useCallback((checked: boolean) => {
        if (checked) {
            setFormVisible(true);
        } else {
            setFormVisible(false);
        }
    }, [setFormVisible]);

    return useMemo(() => ({ formVisible, toggleFormVisibility }), [formVisible, toggleFormVisibility]);
};