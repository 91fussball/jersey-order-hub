import React from 'react';

import { MantineProvider } from '@mantine/core';
import { render } from '@testing-library/react';

import { HStack } from '../HStack';

describe('HStack', () => {
    it('should renders children correctly', () => {
        const { getByText } = render(
            <HStack>
                <div>Child 1</div>
                <div>Child 2</div>
            </HStack>,
            { wrapper: MantineProvider },
        );

        expect(getByText('Child 1')).toBeInTheDocument();
        expect(getByText('Child 2')).toBeInTheDocument();
    });
});
