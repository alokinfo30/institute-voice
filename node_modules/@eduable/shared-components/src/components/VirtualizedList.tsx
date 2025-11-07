import React, { useMemo, useRef } from 'react';
import { FixedSizeList as List } from 'react-window';
import { Box, Typography } from '@mui/material';

interface VirtualizedListProps {
  items: any[];
  height: number;
  itemHeight: number;
  renderItem: (item: any, index: number) => React.ReactNode;
  emptyMessage?: string;
}

export const VirtualizedList: React.FC<VirtualizedListProps> = ({
  items,
  height,
  itemHeight,
  renderItem,
  emptyMessage = 'No items found',
}) => {
  const listRef = useRef<List>(null);

  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => (
    <Box style={style}>
      {renderItem(items[index], index)}
    </Box>
  );

  if (items.length === 0) {
    return (
      <Box
        sx={{
          height,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography color="textSecondary">{emptyMessage}</Typography>
      </Box>
    );
  }

  return (
    <List
      ref={listRef}
      height={height}
      itemCount={items.length}
      itemSize={itemHeight}
      width="100%"
    >
      {Row}
    </List>
  );
};