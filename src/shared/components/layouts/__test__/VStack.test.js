import React from 'react';

import { MantineProvider } from '@mantine/core';
import { render } from '@testing-library/react';

import { VStack } from '../VStack';

describe('VStack', () => {
    it('should renders children correctly', () => {
        const { getByText } = render(
            <VStack>
                <div>Child 1</div>
                <div>Child 2</div>
            </VStack>,
            { wrapper: MantineProvider },
        );

        expect(getByText('Child 1')).toBeInTheDocument();
        expect(getByText('Child 2')).toBeInTheDocument();
    });
});
