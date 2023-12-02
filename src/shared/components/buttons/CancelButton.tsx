import { ButtonProps } from '@mantine/core';
import { ChevronBackOutline } from 'react-ionicons';

import { Button } from './Button';

type CancelButtonProps = { text?: string; onClick?: () => void } & ButtonProps;

export const CancelButton = ({
    text = 'Cancel',
    onClick,
    ...props
}: CancelButtonProps) => {
    return (
        <Button
            {...props}
            prefix={<ChevronBackOutline />}
            onClick={onClick}
            size="sm"
            colorScheme="neutral"
        >
            {text}
        </Button>
    );
};
