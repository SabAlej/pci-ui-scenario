import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../../components/Button';

test('renders "Clear Filters and Sorters" button and executes function on click', () => {
  const mockFunction = jest.fn();

  render(<Button onClick={mockFunction} />);

  const buttonElement = screen.getByText(/Clear Filters and Sorters/i);
  expect(buttonElement).toBeInTheDocument();

  fireEvent.click(buttonElement);
  expect(mockFunction).toHaveBeenCalled();
});
