import { AgGridReact } from 'ag-grid-react';
import { columnDefs } from '../lib/columsDefinitions';
import ErrorBoundary from './ErrorBoundary';
import data from '../near-earth-asteroids.json';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import 'ag-grid-enterprise';
import { formattedData } from '../lib/dataHelpers';
import { useRef, useCallback, useEffect, FC, CSSProperties } from 'react';
import Title from './Title';
import Navbar from './Navbar';
import Button from './Button';

const gridStyle: CSSProperties = { height: '90vh', width: '98vw' };

const NeoGrid: FC = (): JSX.Element => {
  const gridRef = useRef<AgGridReact | null>(null);

  const clearFilters = useCallback(() => {
    if (gridRef.current) {
      gridRef.current.api.setFilterModel(null);
      if (gridRef.current.columnApi) {
        gridRef.current.columnApi.applyColumnState({
          defaultState: { sort: null },
        });
      }
    }
  }, []);

  const handleResize = () => {
    if (gridRef.current && gridRef.current.columnApi) {
      gridRef.current.api.sizeColumnsToFit();
    }
  };

  useEffect(() => {
    window.addEventListener('load', handleResize);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', handleResize);
    };
  }, []);

  return (
    <>
      <Navbar>
        <Title />
        <Button onClick={clearFilters} />
      </Navbar>
      <div className='ag-theme-alpine' style={gridStyle}>
        <ErrorBoundary fallback={<p>Something went wrong</p>}>
          <AgGridReact
            ref={gridRef}
            rowData={formattedData(data)}
            columnDefs={columnDefs}
            enableRangeSelection={true}
          />
        </ErrorBoundary>
      </div>
    </>
  );
};

export default NeoGrid;
