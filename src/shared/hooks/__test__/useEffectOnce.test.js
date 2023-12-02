import { renderHook } from '@testing-library/react';

import { useEffectOnce } from '../useEffectOnce';

describe('Unit test shared hooks - useEffectOnce:', () => {
    it('should run effect only once', () => {
        const effectMock = jest.fn();

        const { rerender, unmount } = renderHook(() =>
            useEffectOnce(effectMock),
        );

        expect(effectMock).toHaveBeenCalledTimes(1);
        rerender();
        expect(effectMock).toHaveBeenCalledTimes(1);
        unmount();
        expect(effectMock).toHaveBeenCalledTimes(1);
    });
});
