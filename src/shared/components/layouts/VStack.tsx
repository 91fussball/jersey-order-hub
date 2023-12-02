import { ReactNode } from 'react';

import { Stack, StackProps } from '@mantine/core';

import {
    BaseComponentProps,
    BoxProps,
    FlexProps,
    MarginProps,
    PaddingProps,
} from '@/shared/interfaces/component.interface';

export type VStackProps = {
    children: ReactNode | ReactNode[];
} & BaseComponentProps &
    BoxProps &
    FlexProps &
    PaddingProps &
    MarginProps &
    StackProps;

export const VStack = ({ children, ...props }: VStackProps) => {
    const { className, style } = props;
    const { w, h } = props;
    const { align, gap, justify, wrap } = props;
    const { p, px, py, pt, pb, pr, pl, m, mx, my, mt, mb, mr, ml } = props;

    return (
        <Stack
            align={align}
            className={className}
            gap={gap}
            h={h}
            justify={justify}
            m={m}
            mb={mb}
            ml={ml}
            mr={mr}
            mt={mt}
            mx={mx}
            my={my}
            p={p}
            pb={pb}
            pl={pl}
            pr={pr}
            pt={pt}
            px={px}
            py={py}
            style={style}
            w={w}
            wrap={wrap}
            {...props}
        >
            {children}
        </Stack>
    );
};
