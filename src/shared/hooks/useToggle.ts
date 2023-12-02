import { useState } from 'react';

export type UseToggleReturnType = {
    value: boolean;
    toggle: () => void;
    setTrue: () => void;
    setFalse: () => void;
};

export const useToggle = (
    initialValue: boolean = false,
): UseToggleReturnType => {
    const [value, setValue] = useState<boolean>(initialValue);

    const toggle = () => {
        setValue((prevValue) => !prevValue);
    };

    const setTrue = () => {
        setValue(true);
    };

    const setFalse = () => {
        setValue(false);
    };

    return {
        value,
        toggle,
        setTrue,
        setFalse,
    };
};
