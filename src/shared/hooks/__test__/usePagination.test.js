import { act, renderHook } from '@testing-library/react';

import { usePagination } from '../usePagination';

describe('Unit test shared hooks - usePagination:', () => {
    it('should returns default values', () => {
        const { result } = renderHook(() => usePagination());

        expect(result.current.page).toBe(1);
        expect(result.current.perPage).toBe(10);
        expect(result.current.limit).toBe(10);
        expect(result.current.skip).toBe(0);
    });

    it('should updates page and perPage values correctly', () => {
        const { result } = renderHook(() => usePagination());

        act(() => {
            result.current.setPage(2);
            result.current.setPerPage(20);
        });

        expect(result.current.page).toBe(2);
        expect(result.current.perPage).toBe(20);
        expect(result.current.limit).toBe(20);
        expect(result.current.skip).toBe(20);
    });

    // Add more test cases as needed
});
