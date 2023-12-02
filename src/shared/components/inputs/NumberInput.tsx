import { forwardRef } from 'react';

import {
    NumberInput as MantineNumberInput,
    NumberInputProps as MantineNumberInputProps,
} from '@mantine/core';

import { DEFAULT_INPUT_PROPS } from '@/shared/constants/default-input-props';

export const NumberInput = forwardRef<
    HTMLInputElement,
    MantineNumberInputProps
>((props: MantineNumberInputProps, ref) => {
    return <MantineNumberInput ref={ref} {...DEFAULT_INPUT_PROPS} {...props} />;
});

NumberInput.displayName = 'NumberInput';
