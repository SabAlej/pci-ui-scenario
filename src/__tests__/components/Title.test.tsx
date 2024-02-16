import { render, screen } from '@testing-library/react';
import Title from '../../components/Title';

test('renders "Near-Earth Object Overview" in the Title', () => {
  render(<Title />);
  const linkElement = screen.getByText(/Near-Earth Object Overview/i);
  expect(linkElement).toBeInTheDocument();
});
