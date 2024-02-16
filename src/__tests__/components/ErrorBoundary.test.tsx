import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../../components/ErrorBoundary';
import React from 'react';

// A component that will throw an error when rendered
const ErrorComponent = () => {
  throw new Error('Test error');
};

describe('ErrorBoundary', () => {
  beforeEach(() => {
    // Silence the console.error calls that ErrorBoundary does
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('renders fallback UI when child component throws an error', () => {
    render(
      <ErrorBoundary fallback={<div>Something went wrong.</div>}>
        <ErrorComponent />
      </ErrorBoundary>
    );

    expect(screen.getByText('Something went wrong.')).toBeInTheDocument();
  });

  test('does not render fallback UI when child component does not throw an error', () => {
    render(
      <ErrorBoundary fallback={<div>Something went wrong.</div>}>
        <div>Everything is fine.</div>
      </ErrorBoundary>
    );

    expect(screen.getByText('Everything is fine.')).toBeInTheDocument();
    expect(screen.queryByText('Something went wrong.')).not.toBeInTheDocument();
  });
});
