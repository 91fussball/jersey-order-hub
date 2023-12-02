import { forwardRef, ReactNode } from 'react';

import {
    Button as MantineButton,
    ButtonProps as MantineButtonProps,
} from '@mantine/core';

import { ExtendedCustomColors } from '@/shared/interfaces/mantine';

type ButtonContrast =
    | 'solid'
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'transparent';

type ButtonProps = {
    children: ReactNode;
    colorScheme?: ExtendedCustomColors;
    contrast?: ButtonContrast;
    onClick?: () => void;
    prefix?: ReactNode;
    suffix?: ReactNode;
    textColor?: ExtendedCustomColors;
    type?: 'submit' | 'button';
} & Omit<MantineButtonProps, 'color' | 'c' | 'leftSection' | 'rightSection'>;

type ButtonColorSchemeRecord = Record<
    ButtonContrast,
    { color: ExtendedCustomColors; textColor: ExtendedCustomColors }
>;

type ButtonColorSchemeFn = (props: {
    contrast?: ButtonContrast;
    colorScheme?: ExtendedCustomColors;
    textColor?: ExtendedCustomColors;
}) => {
    color: ExtendedCustomColors;
    textColor: ExtendedCustomColors;
};

const getButtonColorScheme: ButtonColorSchemeFn = ({
    colorScheme = 'green',
    contrast = 'primary',
    textColor = 'white',
}) => {
    const COLOR_SCHEME: ButtonColorSchemeRecord = {
        solid: {
            color: `${colorScheme}.6`,
            textColor: textColor || 'neutral.0',
        },
        primary: {
            color: `${colorScheme}.5`,
            textColor: textColor || `${colorScheme}.8`,
        },
        secondary: {
            color: `${colorScheme}.0`,
            textColor: textColor || `${colorScheme}.5`,
        },
        tertiary: {
            color: 'neutral.1',
            textColor: textColor || `${colorScheme}.8`,
        },
        transparent: {
            color: 'transparent',
            textColor: textColor || `${colorScheme}.8`,
        },
    };

    return COLOR_SCHEME[contrast];
};

/**
 *
 * @description This Base Button only can modify the color scheme, contrast, and text color. If you wonder how to modify the variants, you can create a new component that extends this Base Button. @tamagossi @primakashi
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            children,
            type = 'button',
            prefix,
            suffix,
            colorScheme,
            textColor,
            contrast,
            size = 'md',
            ...props
        }: ButtonProps,
        ref,
    ) => {
        const buttonColorScheme = getButtonColorScheme({
            colorScheme,
            contrast,
            textColor,
        });

        return (
            <MantineButton
                {...props}
                ref={ref}
                color={buttonColorScheme.color}
                c={buttonColorScheme.textColor}
                size={size}
                leftSection={prefix}
                rightSection={suffix}
                type={type}
            >
                {children}
            </MantineButton>
        );
    },
);

Button.displayName = 'Button';
