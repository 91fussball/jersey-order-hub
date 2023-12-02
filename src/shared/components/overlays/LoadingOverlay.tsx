import {
    LoadingOverlay as MantineLoadingOverlay,
    LoadingOverlayProps as MantineOverlayProps,
} from '@mantine/core';

export type LoadingOverlayProps = { visible?: boolean } & MantineOverlayProps;

export const LoadingOverlay = ({ visible, ...props }: LoadingOverlayProps) => {
    return (
        <MantineLoadingOverlay
            visible={visible}
            loaderProps={{ type: 'bars' }}
            {...props}
        />
    );
};
