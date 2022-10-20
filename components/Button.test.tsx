import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Testing', () => {
  test.only('should rander the button', () => {
    const { debug } = render(<Button>Primary</Button>);
    const btnPrimary = screen.getByRole('button', { name: /primary/i });

    debug();

    expect(btnPrimary).toBeInTheDocument();
  });
});
