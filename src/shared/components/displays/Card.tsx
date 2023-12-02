import { ReactNode } from 'react';

import { Box, BoxProps } from '@mantine/core';

type Card = { children: ReactNode } & BoxProps;

export const Card = ({ children, ...props }: Card) => {
    return (
        <Box className="rounded-md bg-white border" p={20} {...props}>
            {children}
        </Box>
    );
};
