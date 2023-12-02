import React from 'react';

import { MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {
    LabelWithInfo,
    PasswordInput,
    TextInput,
} from '@/shared/components/inputs/LabelWithInfo';

describe('Unit test shared component - LabelWithInfo: ', () => {
    test('should render correctly:', () => {
        const label = 'Example Label';
        const tooltip = 'This is a tooltip';

        render(<LabelWithInfo label={label} tooltip={tooltip} />, {
            wrapper: MantineProvider,
        });

        expect(screen.getByText(label)).toBeInTheDocument();
        expect(screen.getByText('?')).toBeInTheDocument();
    });

    test('should have arterisk if required props passed:', () => {
        const label = 'Example Label';
        const tooltip = 'This is a tooltip';

        render(<LabelWithInfo label={label} tooltip={tooltip} required />, {
            wrapper: MantineProvider,
        });

        expect(screen.getByText('*')).toBeInTheDocument();
    });
});
