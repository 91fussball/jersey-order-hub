import React, { forwardRef } from 'react';

import { Select, SelectProps } from '@mantine/core';

import { DEFAULT_INPUT_PROPS } from '@/shared/constants/default-input-props';
import { BaseOptions } from '@/shared/interfaces/shared.interface';

interface SimpleSelectInputProps extends Omit<SelectProps, 'data'> {
    options?: BaseOptions;
}

export const SimpleSelectInput = forwardRef<
    HTMLInputElement,
    SimpleSelectInputProps
>((props, ref) => {
    const { options = [], ...restProps } = props;

    return (
        <Select
            {...DEFAULT_INPUT_PROPS}
            {...restProps}
            ref={ref}
            data={options}
        />
    );
});

SimpleSelectInput.displayName = 'SimpleSelectInput';
