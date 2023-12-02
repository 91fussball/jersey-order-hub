import { ReactNode } from 'react';

import { Grid, GridProps, Group } from '@mantine/core';

import {
    BaseComponentProps,
    BoxProps,
    FlexProps,
    MarginProps,
    PaddingProps,
} from '@/shared/interfaces/component.interface';

export type RowProps = {
    children: ReactNode | ReactNode[];
} & BaseComponentProps &
    BoxProps &
    FlexProps &
    PaddingProps &
    MarginProps &
    GridProps;

export const Row = ({ children, ...props }: RowProps) => {
    const { className, style } = props;
    const { w, h } = props;
    const { align, gap, justify, wrap, columns = 12 } = props;
    const { p, px, py, pt, pb, pr, pl, m, mx, my, mt, mb, mr, ml } = props;

    return (
        <Grid
            align={align}
            className={className}
            columns={columns}
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
        </Grid>
    );
};
