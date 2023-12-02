import React from 'react';

import {
    Text as MantineText,
    Title as MantineTitle,
    TitleOrder,
} from '@mantine/core';

import { TypographyProps } from '@/shared/interfaces/component.interface';

const TYPOGRAPHY_VARIANT_MAP: Record<
    string,
    { fontSize: string; fontWeight: string; order: number | string }
> = {
    h1: { fontSize: '4xl', fontWeight: 'bold', order: 1 },
    h2: { fontSize: '3xl', fontWeight: 'bold', order: 2 },
    h3: { fontSize: '2xl', fontWeight: 'bold', order: 3 },
    h4: { fontSize: 'xl', fontWeight: 'bold', order: 4 },
    h5: { fontSize: 'lg', fontWeight: 'bold', order: 5 },
    h6: { fontSize: 'base', fontWeight: 'normal', order: 6 },
    p: { fontSize: 'base', fontWeight: 'normal', order: 'p' },
};

export const Typography: React.FC<TypographyProps> = ({
    as = 'p',
    children,
    className = '',
    color,
    fontSize,
    fontWeight,
}: TypographyProps) => {
    const {
        fontSize: defaultFs,
        fontWeight: defaultFw,
        order,
    } = TYPOGRAPHY_VARIANT_MAP[as] || {
        fontSize: 'base',
        fontWeight: 'normal',
    };

    const style = {
        color: color || 'black',
        fontSize: fontSize || defaultFs,
        fontWeight: fontWeight || defaultFw,
    };

    if (typeof order === 'string') {
        return (
            <MantineText className={className} style={style}>
                {children}
            </MantineText>
        );
    }

    return (
        <MantineTitle
            order={order as TitleOrder}
            className={className}
            style={style}
        >
            {children}
        </MantineTitle>
    );
};
