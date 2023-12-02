import React, { FC } from 'react';

import {
    Divider,
    Group,
    Modal as MantineModal,
    ModalProps as MantineModalProps,
    rem,
    Space,
} from '@mantine/core';

import { Button } from '@/shared/components/buttons/Button';
import { useGetColor } from '@/shared/hooks/useGetColor';

import { Typography } from '../typography/Typography';

interface BaseModalProps extends MantineModalProps {
    cancelButtonRef?: React.RefObject<HTMLButtonElement>;
    cancelText?: string;
    children?: React.ReactNode;
    footer?: React.ReactNode;
    footerProps?: React.ComponentPropsWithoutRef<typeof Group>;
    okButtonRef?: React.RefObject<HTMLButtonElement>;
    okText?: string;
    onClose: () => void;
    onOk?: () => void;
    opened: boolean;
    okButtonProps?: Omit<
        React.ComponentPropsWithoutRef<typeof Button>,
        'children'
    >;
    cancelButtonProps?: Omit<
        React.ComponentPropsWithoutRef<typeof Button>,
        'children'
    >;
}

const BaseModal: FC<BaseModalProps> = ({
    cancelButtonProps,
    cancelButtonRef,
    cancelText,
    children,
    footer,
    footerProps,
    okButtonProps,
    okButtonRef,
    okText,
    onClose,
    onOk,
    opened,
    ...props
}) => {
    const headerBackground = useGetColor('neutral.2');
    const closeButtonBg = useGetColor('white');

    return (
        <MantineModal
            {...props}
            opened={opened}
            onClose={onClose}
            radius="md"
            styles={{
                header: {
                    backgroundColor: headerBackground,
                    boxShadow: `0 0 ${rem(8)} rgba(0, 0, 0, 0.1)`,
                },
                title: {
                    width: '100%',
                    textAlign: 'center',
                },
                close: {
                    borderRadius: '50%',
                    backgroundColor: closeButtonBg,
                },
            }}
        >
            <Space h="md" />

            {children}

            <Space h="sm" />

            <Divider />

            <Space h="md" />

            <Group gap={4} justify="flex-end" w="100%" {...footerProps}>
                {footer ? (
                    footer
                ) : (
                    <>
                        <Button
                            colorScheme="neutral"
                            fw="500"
                            ref={cancelButtonRef}
                            size="md"
                            type="button"
                            {...cancelButtonProps}
                            onClick={onClose}
                        >
                            {cancelText || 'Cancel'}
                        </Button>

                        <Button
                            fw="500"
                            onClick={onOk}
                            ref={okButtonRef}
                            size="md"
                            type="button"
                            {...okButtonProps}
                        >
                            {okText || 'OK'}
                        </Button>
                    </>
                )}
            </Group>
        </MantineModal>
    );
};
export { BaseModal };
