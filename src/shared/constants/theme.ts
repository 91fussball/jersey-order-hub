import { Roboto } from 'next/font/google';

import { createTheme, DEFAULT_THEME, mergeMantineTheme } from '@mantine/core';

import { colors } from '@/shared/constants/colors';

const roboto = Roboto({
    preload: true,
    subsets: ['latin-ext'],
    weight: ['100', '300', '400', '500', '700', '900'],
});

const baseTheme = createTheme({
    black: 'hsl(0, 0%, 15%)',
    colors,
    fontFamily: `${roboto.style.fontFamily}, sans-serif`,
    primaryColor: 'yellow',
    primaryShade: 2,
    scale: 0.98,
    white: 'hsl(0, 0%, 100%)',
});

export const theme = mergeMantineTheme(DEFAULT_THEME, baseTheme);
