import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from 'react';
import { DataGrid, GridToolbar, } from '@mui/x-data-grid';
import { Box, Paper } from '@mui/material';
const DataTable = ({ rows, columns, loading = false, pageSize = 25, rowsPerPageOptions = [10, 25, 50, 100], checkboxSelection = false, onRowClick, onSelectionChange, sortModel, onSortModelChange, filterModel, onFilterModelChange, }) => {
    const enhancedColumns = useMemo(() => {
        return columns.map(column => ({
            ...column,
            flex: column.flex || 1,
            minWidth: column.minWidth || 100,
        }));
    }, [columns]);
    return (_jsx(Paper, { sx: { width: '100%' }, children: _jsx(Box, { sx: { height: 600, width: '100%' }, children: _jsx(DataGrid, { rows: rows, columns: enhancedColumns, loading: loading, 
                // pageSize typing differs between MUI versions; cast/ignore to keep build stable here
                // @ts-ignore
                pageSize: pageSize, rowsPerPageOptions: rowsPerPageOptions, checkboxSelection: checkboxSelection, disableSelectionOnClick: true, onRowClick: (params) => onRowClick?.(params.row), onSelectionModelChange: (selection) => onSelectionChange?.(selection), sortModel: sortModel, onSortModelChange: onSortModelChange, filterModel: filterModel, onFilterModelChange: onFilterModelChange, components: {
                    Toolbar: GridToolbar,
                }, componentsProps: {
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: { debounceMs: 500 },
                    },
                }, sx: {
                    border: 'none',
                    '& .MuiDataGrid-cell:hover': {
                        backgroundColor: 'action.hover',
                        cursor: onRowClick ? 'pointer' : 'default',
                    },
                    '& .MuiDataGrid-columnHeaders': {
                        backgroundColor: 'background.default',
                        borderBottom: '2px solid',
                        borderColor: 'divider',
                    },
                } }) }) }));
};
export { DataTable };
export default DataTable;
