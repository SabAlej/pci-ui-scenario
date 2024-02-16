import { AgGridReact } from 'ag-grid-react';
import { columnDefs } from './lib/columsDefinitions';
import data from './near-earth-asteroids.json';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import 'ag-grid-enterprise';
import { formattedData } from './lib/dataHelpers';
import { useRef, useCallback } from 'react';

const NeoGrid = (): JSX.Element => {
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

  // const handleResize = () => {
  //   if (gridRef.current && gridRef.current.columnApi) {
  //     gridRef.current.api.sizeColumnsToFit();
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  return (
    <>
      <nav
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <h1>Near-Earth Object Overview</h1>
        <button
          style={{
            margin: '10px 15px',
            borderRadius: '10px',
            width: '7em',
            cursor: 'pointer',
          }}
          onClick={clearFilters}
        >
          Clear Filters and Sorters
        </button>
      </nav>
      <div
        className='ag-theme-alpine'
        style={{ height: '90vh', width: '98vw' }}
      >
        <AgGridReact
          ref={gridRef}
          rowData={formattedData(data)}
          columnDefs={columnDefs}
          rowGroupPanelShow={'always'}
          enableRangeSelection={true}
        />
      </div>
    </>
  );
};

export default NeoGrid;
