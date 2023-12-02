import { forwardRef, useState } from 'react';

import {
    Switch as MantineSwitch,
    SwitchProps as MantineSwitchProps,
} from '@mantine/core';

import { HStack } from '@/shared/components/layouts/HStack';
import { Typography } from '@/shared/components/typography/Typography';
import { useUpdateEffect } from '@/shared/hooks/useUpdateEffect';

export type SwitchProps = {
    disabled?: boolean;
    hideLabel?: boolean;
    offText?: string;
    onText?: string;
} & MantineSwitchProps;

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
    (
        {
            disabled = false,
            hideLabel = false,
            offText = 'Inactive',
            onText = 'Active',
            checked,
            onChange,
            ...props
        }: SwitchProps,
        ref,
    ) => {
        const [active, setActive] = useState(checked);

        useUpdateEffect(() => {
            setActive(checked);
        }, [checked]);

        return (
            <HStack>
                <MantineSwitch
                    ref={ref}
                    disabled={disabled}
                    size="md"
                    checked={checked}
                    onChange={(e) => {
                        setActive(e.target.checked);
                        onChange?.(e);
                    }}
                    {...props}
                />
                {!hideLabel && (
                    <Typography>{active ? onText : offText}</Typography>
                )}
            </HStack>
        );
    },
);

Switch.displayName = 'Switch';
