import { ForwardedRef, forwardRef } from 'react';

import {
    DatePickerType,
    DatePickerValue,
    DateValue,
    DatePickerInput as MantineDatePickerInput,
    DatePickerInputProps as MantineDatePickerInputProps,
} from '@mantine/dates';

export type { DatePickerType, DateValue };

interface DatePickerInputProps<T extends DatePickerType = 'default'>
    extends MantineDatePickerInputProps<T> {
    value: DatePickerValue<T>;
    onChange(value: DatePickerValue<T>): void;
}

export const DatePickerInput = forwardRef(
    <T extends DatePickerType = 'default'>(
        props: DatePickerInputProps<T>,
        ref: ForwardedRef<HTMLButtonElement>,
    ) => {
        return <MantineDatePickerInput ref={ref} {...props} />;
    },
) as (<T extends DatePickerType = 'default'>(
    props: DatePickerInputProps<T>,
) => JSX.Element) & { displayName: string };

DatePickerInput.displayName = 'DatePickerInput';
