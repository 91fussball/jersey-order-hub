import { Loader, LoaderProps } from '@mantine/core';

import { HStack } from '@/shared/components/layouts/HStack';
import { BoxProps } from '@/shared/interfaces/component.interface';

export type CenterLoaderProps = Pick<BoxProps, 'w' | 'h'> &
    LoaderProps & { size?: number; color?: string };

export const CenterLoader = ({
    className,
    w = '100%',
    h = '100px',
    size,
    color,
    ...props
}: CenterLoaderProps) => {
    return (
        <HStack
            className={className}
            w={w}
            h={h}
            justify="center"
            align="center"
        >
            <Loader size={size} color={color} type="dots" />
        </HStack>
    );
};
