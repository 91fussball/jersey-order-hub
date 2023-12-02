import React from 'react';

import { MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { PasswordInput } from '@/shared/components/inputs/PasswordInput';

describe('Unit test shared component - PasswordInput: ', () => {
    it('should render correctly:', () => {
        render(<PasswordInput label="Password" />, {
            wrapper: MantineProvider,
        });
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    });

    it('should handles user input correctly', async () => {
        render(<PasswordInput label="Password" />, {
            wrapper: MantineProvider,
        });
        const passwordInput = screen.getByLabelText(/password/i);

        await userEvent.type(passwordInput, 'password123');
        expect(passwordInput).toHaveValue('password123');
    });

    // TODO: @tamagossi @rachmizard add unit test for password seen or hidden
    // TODO: @tamagossi @rachmizard add unit test for style size should lg by default and has styles={{ label: { fontSize: 15, marginBottom: 5 } }}
});
