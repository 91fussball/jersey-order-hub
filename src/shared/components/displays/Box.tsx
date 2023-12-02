import { ReactNode } from 'react';

import { Box as MantineBox, BoxProps as MantineBoxProps } from '@mantine/core';

import { BoxProps } from '@/shared/interfaces/component.interface';

export const Box = ({
    children,
    ...props
}: { children: ReactNode | ReactNode[] } & BoxProps & MantineBoxProps) => {
    return <MantineBox {...props}>{children}</MantineBox>;
};
