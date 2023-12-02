import { DefaultMantineColor, MantineColorsTuple } from '@mantine/core';

type ExtendedCustomColors = 'neutral' | 'purple' | DefaultMantineColor;

declare module '@mantine/core' {
    export interface MantineThemeColorsOverride {
        colors: Record<ExtendedCustomColors, MantineColorsTuple>;
    }
}
