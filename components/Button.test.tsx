import { render } from '@testing-library/react';
import Button from './Button';

describe('Testing', () => {
  test.only('should rander the button', () => {
    render(<Button>Primary</Button>);
  });
});
