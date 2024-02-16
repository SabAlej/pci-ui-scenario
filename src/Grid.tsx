import { AgGridReact } from 'ag-grid-react';
import { columnDefs } from './lib/columsDefinitions';
import data from './near-earth-asteroids.json';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import 'ag-grid-enterprise';
import { formattedData } from './lib/dataHelpers';

const NeoGrid = (): JSX.Element => {
  return (
    <div className='ag-theme-alpine' style={{ height: '90vh', width: '100%' }}>
      <AgGridReact
        rowData={formattedData(data)}
        columnDefs={columnDefs}
        rowGroupPanelShow={'always'}
        enableRangeSelection={true}
      />
    </div>
  );
};

export default NeoGrid;
