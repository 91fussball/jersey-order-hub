import React from 'react';

import {
    Popover as MantinePopover,
    PopoverProps as MantinePopoverProps,
} from '@mantine/core';

interface PopoverProps extends MantinePopoverProps {
    children?: React.ReactNode;
    content?: React.ReactNode;
    width?: number;
}

export const Popover = ({ children, content, ...rest }: PopoverProps) => {
    return (
        <MantinePopover {...rest}>
            <MantinePopover.Target>{children}</MantinePopover.Target>
            <MantinePopover.Dropdown>{content}</MantinePopover.Dropdown>
        </MantinePopover>
    );
};
