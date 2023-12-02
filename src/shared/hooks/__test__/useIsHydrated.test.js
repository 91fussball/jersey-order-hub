import { renderHook } from '@testing-library/react';

import { useIsHydrated } from '../useIsHydrated';

describe('Unit test shared hooks - useIsHydrated:', () => {
    it('should return true after first render', () => {
        const { result } = renderHook(() => useIsHydrated());
        expect(result.current).toBe(true);
    });
});
