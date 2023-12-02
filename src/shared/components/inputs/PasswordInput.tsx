import {
    PasswordInput as MantinePasswordInput,
    PasswordInputProps as MantinePasswordInputProps,
} from '@mantine/core';

import { DEFAULT_INPUT_PROPS } from '@/shared/constants/default-input-props';

export const PasswordInput = (
    props: MantinePasswordInputProps & { onEnter?: () => void },
) => {
    return <MantinePasswordInput {...DEFAULT_INPUT_PROPS} {...props} />;
};
