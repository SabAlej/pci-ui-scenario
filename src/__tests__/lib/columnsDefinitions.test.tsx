import { render, screen } from '@testing-library/react';
import { AgGridReact } from 'ag-grid-react';
import { columnDefs } from '../../lib/columsDefinitions';

test('renders grid with correct columns', () => {
  render(
    <div className='ag-theme-alpine'>
      <AgGridReact columnDefs={columnDefs} />
    </div>
  );

  columnDefs.forEach(colDef => {
    const headerElement = screen.getByText(colDef.headerName!);

    expect(headerElement).toBeInTheDocument();
  });
});
