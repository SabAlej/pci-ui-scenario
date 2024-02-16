import { render, screen, fireEvent, act } from '@testing-library/react';
import Grid from '../../components/Grid';
import React from 'react';
import { AgGridReact } from 'ag-grid-react';
const mockSetFilterModel = jest.fn();
const mockSizeColumnsToFit = jest.fn();
const mockApplyColumnState = jest.fn();

jest.mock('ag-grid-react', () => {
  const React = jest.requireActual('react');
  const AgGridReact = React.forwardRef(
    (
      {
        rowData,
        columnDefs,
        enableRangeSelection,

        ...props
      }: {
        rowData: any[];
        columnDefs: any;
        enableRangeSelection: any;
      },
      ref
    ) => {
      ref.current = {
        api: {
          setFilterModel: mockSetFilterModel,
          sizeColumnsToFit: mockSizeColumnsToFit,
        },
        columnApi: {
          applyColumnState: mockApplyColumnState,
        },
      };
      return <div {...props} />;
    }
  );
  return {
    __esModule: true,
    AgGridReact,
  };
});

describe('Grid', () => {
  beforeEach(() => {
    AgGridReact as jest.Mock;
  });

  test('clearFilters', () => {
    render(<Grid />);

    const button = screen.getByText(/Clear Filters and Sorters/i);

    fireEvent.click(button);

    expect(mockSetFilterModel).toHaveBeenCalled();
    expect(mockApplyColumnState).toHaveBeenCalled();
  });

  test('handleResize', () => {
    render(<Grid />);

    act(() => {
      window.dispatchEvent(new Event('load'));
    });

    expect(mockSizeColumnsToFit).toHaveBeenCalled();
  });
});
