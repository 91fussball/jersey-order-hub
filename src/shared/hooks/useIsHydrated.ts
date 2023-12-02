import { useState } from 'react';

import { useEffectOnce } from './useEffectOnce';

export const useIsHydrated = () => {
    const [isHydrated, setIsHydrated] = useState(false);

    useEffectOnce(() => {
        setIsHydrated(true);
    });

    return isHydrated;
};
