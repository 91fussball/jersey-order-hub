import { forwardRef } from 'react';

import {
    TextInput as MantineTextInput,
    TextInputProps as MantineTextInputProps,
} from '@mantine/core';

import { DEFAULT_INPUT_PROPS } from '@/shared/constants/default-input-props';

export const TextInput = forwardRef<HTMLInputElement, MantineTextInputProps>(
    (props: MantineTextInputProps, ref) => {
        return (
            <MantineTextInput ref={ref} {...DEFAULT_INPUT_PROPS} {...props} />
        );
    },
);

TextInput.displayName = 'TextInput';
