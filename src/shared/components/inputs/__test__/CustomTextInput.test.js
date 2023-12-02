import React from 'react';

import { MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TextInput } from '@/shared/components/inputs/TextInput';

describe('Unit test shared component - TextInput: ', () => {
    it('should render correctly:', () => {
        render(<TextInput label="Test" />, {
            wrapper: MantineProvider,
        });
        expect(screen.getByLabelText(/test/i)).toBeInTheDocument();
    });

    it('should handles user input correctly', async () => {
        render(<TextInput label="Test" />, {
            wrapper: MantineProvider,
        });
        const textInput = screen.getByLabelText(/test/i);

        await userEvent.type(textInput, 'example text');
        expect(textInput).toHaveValue('example text');
    });

    // TODO: @tamagossi @rachmizard add unit test for password seen or hidden
    // TODO: @tamagossi @rachmizard add unit test for style size should lg by default and has styles={{ label: { fontSize: 15, marginBottom: 5 } }}
});
