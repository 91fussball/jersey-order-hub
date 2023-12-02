import React, { forwardRef, ReactNode } from 'react';

import {
    Loader,
    MultiSelect as MantineMultiSelect,
    MultiSelectProps as MantineMultiSelectProps,
} from '@mantine/core';

import { DEFAULT_INPUT_PROPS } from '@/shared/constants/default-input-props';
import { BaseOptions } from '@/shared/interfaces/shared.interface';

import { Box } from '../displays/Box';

type SimpleMultiSelectInputProps = MantineMultiSelectProps & {
    clearable?: boolean;
    defaultValue?: string[];
    emptyText?: string | ReactNode;
    loading?: boolean;
    onChange?: (val: string[]) => void;
    options?: BaseOptions;
    placeholder?: string;
    required?: boolean;
    searchable?: boolean;
    value?: string[];
    width?: string | number;
};

export const SimpleMultiSelectInput = forwardRef<
    HTMLInputElement,
    SimpleMultiSelectInputProps
>(
    (
        {
            clearable,
            defaultValue,
            emptyText,
            loading,
            onChange,
            options = [],
            placeholder,
            searchable,
            value,
            width = 217,
            ...restProps
        },
        ref,
    ) => {
        const getPlaceholderText = (): string | undefined => {
            if (value) return undefined;
            if (loading) return 'Fetching options...';
            if (typeof options === 'undefined') return 'No data...';
            if (Array.isArray(options) && options.length === 0) {
                return 'No data...';
            }

            return placeholder;
        };

        return (
            <Box w={width}>
                <MantineMultiSelect
                    {...DEFAULT_INPUT_PROPS}
                    {...restProps}
                    clearable={clearable}
                    data={options}
                    defaultValue={defaultValue}
                    nothingFoundMessage={emptyText}
                    onChange={onChange}
                    placeholder={getPlaceholderText()}
                    ref={ref}
                    rightSection={loading ? <Loader size="sm" /> : undefined}
                    searchable={searchable}
                    value={value}
                />
            </Box>
        );
    },
);

SimpleMultiSelectInput.displayName = 'SimpleMultiSelectInput';
