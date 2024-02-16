import { AgGridReact } from 'ag-grid-react';
import { columnDefs } from './lib/columsDefinitions';
import data from './near-earth-asteroids.json';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const NeoGrid = (): JSX.Element => {
  return (
    <div className='ag-theme-alpine' style={{ height: '90vh', width: '100%' }}>
      <AgGridReact
        rowData={data}
        columnDefs={columnDefs}
        rowGroupPanelShow={'always'}
      />
    </div>
  );
};

export default NeoGrid;
