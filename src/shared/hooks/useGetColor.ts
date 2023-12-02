import { getThemeColor, useMantineTheme } from '@mantine/core';

export const useGetColor = (color: string) => {
    const theme = useMantineTheme();
    return getThemeColor(color, theme);
};
