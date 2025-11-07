import React, { useMemo } from 'react';
import {
  DataGrid,
  GridColDef,
  GridToolbar,
  GridSortModel,
  GridFilterModel,
} from '@mui/x-data-grid';
import { Box, Paper } from '@mui/material';

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

const DataTable: React.FC<DataTableProps> = ({
  rows,
  columns,
  loading = false,
  pageSize = 25,
  rowsPerPageOptions = [10, 25, 50, 100],
  checkboxSelection = false,
  onRowClick,
  onSelectionChange,
  sortModel,
  onSortModelChange,
  filterModel,
  onFilterModelChange,
}) => {
  const enhancedColumns = useMemo(() => {
    return columns.map(column => ({
      ...column,
      flex: column.flex || 1,
      minWidth: column.minWidth || 100,
    }));
  }, [columns]);

  return (
    <Paper sx={{ width: '100%' }}>
      <Box sx={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={enhancedColumns}
          loading={loading}
          // pageSize typing differs between MUI versions; cast/ignore to keep build stable here
          // @ts-ignore
          pageSize={pageSize}
          rowsPerPageOptions={rowsPerPageOptions}
          checkboxSelection={checkboxSelection}
          disableSelectionOnClick
          onRowClick={(params) => onRowClick?.(params.row)}
          onSelectionModelChange={(selection: any) => 
            onSelectionChange?.(selection as string[])
          }
          sortModel={sortModel}
          onSortModelChange={onSortModelChange}
          filterModel={filterModel}
          onFilterModelChange={onFilterModelChange}
          components={{
            Toolbar: GridToolbar,
          }}
          componentsProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          sx={{
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
          }}
        />
      </Box>
    </Paper>
    );
};

export { DataTable };
export default DataTable;