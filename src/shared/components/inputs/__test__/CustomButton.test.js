import { MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from '@/shared/components/Button';

describe('Unit test shared component - Button', () => {
    it('should be rendered correctly', () => {
        render(<Button>Click Me</Button>, {
            wrapper: MantineProvider,
        });

        const button = screen.getByRole('button', { name: /click me/i });
        expect(button).toBeInTheDocument();
    });

    it('should call the callback fn when clicked', async () => {
        const onClick = jest.fn();
        render(<Button onClick={onClick}>Click me</Button>, {
            wrapper: MantineProvider,
        });

        const button = screen.getByRole('button', { name: /click me/i });
        await userEvent.click(button);

        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
