import { render, screen } from '@testing-library/react';
import Navbar from '../../components/Navbar';

test('The Navbar renders their children correctly', () => {
  render(
    <Navbar>
      <div>Test Child</div>
    </Navbar>
  );
  const childElement = screen.getByText(/Test Child/i);
  expect(childElement).toBeInTheDocument();
});
