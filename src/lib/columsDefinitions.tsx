import { ColDef } from 'ag-grid-community';

const commonColumnProperties: ColDef = {
  sortable: true,
  filter: true,
  floatingFilter: true,
  suppressMenu: true,
};

export const columnDefs: ColDef[] = [
  {
    ...commonColumnProperties,
    field: 'designation',
    headerName: 'Designation',
    filter: 'agTextColumnFilter',
  },
  {
    ...commonColumnProperties,
    field: 'discovery_date',
    headerName: 'Discovery Date',

    filter: 'agDateColumnFilter',
  },
  {
    ...commonColumnProperties,
    field: 'h_mag',
    headerName: 'H (mag)',

    filter: 'agNumberColumnFilter',
  },
  {
    ...commonColumnProperties,
    field: 'moid_au',
    headerName: 'MOID (au)',

    filter: 'agNumberColumnFilter',
  },
  {
    ...commonColumnProperties,
    field: 'q_au_1',
    headerName: 'q (au)',

    filter: 'agNumberColumnFilter',
  },
  {
    ...commonColumnProperties,
    field: 'q_au_2',
    headerName: 'Q (au)',

    filter: 'agNumberColumnFilter',
  },
  {
    ...commonColumnProperties,
    field: 'period_yr',
    headerName: 'Period (yr)',

    filter: 'agNumberColumnFilter',
  },
  {
    ...commonColumnProperties,
    field: 'i_deg',
    headerName: 'Inclination (deg)',

    filter: 'agNumberColumnFilter',
  },
  {
    ...commonColumnProperties,
    field: 'pha',
    headerName: 'Potentially Hazardous',

    filter: 'agTextColumnFilter',
  },
  {
    ...commonColumnProperties,
    field: 'orbit_class',
    headerName: 'Orbit Class',

    filter: 'agTextColumnFilter',
  },
];
