import React from 'react';
import { GridColDef, GridSortModel, GridFilterModel } from '@mui/x-data-grid';
interface DataTableProps {
    rows: any[];
    columns: GridColDef[];
    loading?: boolean;
    pageSize?: number;
    rowsPerPageOptions?: number[];
    checkboxSelection?: boolean;
    onRowClick?: (row: any) => void;
    onSelectionChange?: (selectedIds: string[]) => void;
    sortModel?: GridSortModel;
    onSortModelChange?: (model: GridSortModel) => void;
    filterModel?: GridFilterModel;
    onFilterModelChange?: (model: GridFilterModel) => void;
}
declare const DataTable: React.FC<DataTableProps>;
export { DataTable };
export default DataTable;
