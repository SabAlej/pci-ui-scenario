import { ColDef } from 'ag-grid-community';
import {
  dateComparator,
  numberComparator,
  textComparator,
} from './dataHelpers';

const commonColumnProperties: ColDef = {
  sortable: true,
  filter: true,
  floatingFilter: true,
  suppressMenu: true,
  sortingOrder: ['asc', 'desc', null],
  flex: 1,
};

export const columnDefs: ColDef[] = [
  {
    ...commonColumnProperties,
    field: 'designation',
    headerName: 'Designation',
    filter: 'agTextColumnFilter',
    comparator: textComparator,
  },
  {
    ...commonColumnProperties,
    field: 'discovery_date',
    headerName: 'Discovery Date',
    filter: 'agDateColumnFilter',
    comparator: dateComparator,
  },
  {
    ...commonColumnProperties,
    field: 'h_mag',
    headerName: 'H (mag)',
    filter: 'agNumberColumnFilter',
    comparator: numberComparator,
  },
  {
    ...commonColumnProperties,
    field: 'moid_au',
    headerName: 'MOID (au)',
    filter: 'agNumberColumnFilter',
    comparator: numberComparator,
  },
  {
    ...commonColumnProperties,
    field: 'q_au_1',
    headerName: 'q (au)',
    filter: 'agNumberColumnFilter',
    comparator: numberComparator,
  },
  {
    ...commonColumnProperties,
    field: 'q_au_2',
    headerName: 'Q (au)',
    filter: 'agNumberColumnFilter',
    comparator: numberComparator,
  },
  {
    ...commonColumnProperties,
    field: 'period_yr',
    headerName: 'Period (yr)',
    filter: 'agNumberColumnFilter',
    comparator: numberComparator,
  },
  {
    ...commonColumnProperties,
    field: 'i_deg',
    headerName: 'Inclination (deg)',
    filter: 'agNumberColumnFilter',
    comparator: numberComparator,
  },
  {
    ...commonColumnProperties,
    field: 'pha',
    headerName: 'Potentially Hazardous',
    filter: 'agTextColumnFilter',
    comparator: textComparator,
  },
  {
    ...commonColumnProperties,
    field: 'orbit_class',
    headerName: 'Orbit Class',
    filter: 'agTextColumnFilter',
    comparator: textComparator,
  },
];
