import React from 'react';

import { render } from '@testing-library/react';

import { Typography } from '../Typography';

describe('Typography', () => {
    it('should renders with default styles', () => {
        const { getByText } = render(<Typography>Default Text</Typography>);

        const element = getByText('Default Text');

        expect(element).toHaveClass('text-black');
        expect(element).toHaveClass('text-base');
        expect(element).toHaveClass('font-normal');
    });

    it('should renders with custom styles', () => {
        const customProps = {
            as: 'h2',
            children: 'Custom Heading',
            className: 'custom-class',
            fontWeight: 'bold',
            fontSize: '2xl',
            color: 'blue',
        };

        const { getByText } = render(<Typography {...customProps} />);

        const element = getByText('Custom Heading');

        expect(element).toHaveClass('text-blue');
        expect(element).toHaveClass('text-2xl');
        expect(element).toHaveClass('font-bold');
        expect(element).toHaveClass('custom-class');
    });
});
