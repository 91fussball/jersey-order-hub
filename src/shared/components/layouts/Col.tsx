import { ReactNode } from 'react';

import { Grid, GridColProps, GridProps, Group } from '@mantine/core';

import {
    BaseComponentProps,
    BoxProps,
    FlexProps,
    MarginProps,
    PaddingProps,
} from '@/shared/interfaces/component.interface';

export type ColProps = {
    children: ReactNode | ReactNode[];
} & BaseComponentProps &
    BoxProps &
    FlexProps &
    PaddingProps &
    MarginProps &
    GridColProps;

export const Col = ({ children, ...props }: ColProps) => {
    const { className, style } = props;
    const { w, h } = props;
    const { align, gap, justify, wrap, span } = props;
    const { p, px, py, pt, pb, pr, pl, m, mx, my, mt, mb, mr, ml } = props;

    return (
        <Grid.Col
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
            span={span}
            style={style}
            w={w}
            wrap={wrap}
            {...props}
        >
            {children}
        </Grid.Col>
    );
};
