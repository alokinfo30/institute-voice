import { jsx as _jsx } from "react/jsx-runtime";
import { useRef } from 'react';
import { FixedSizeList as List } from 'react-window';
import { Box, Typography } from '@mui/material';
export const VirtualizedList = ({ items, height, itemHeight, renderItem, emptyMessage = 'No items found', }) => {
    const listRef = useRef(null);
    const Row = ({ index, style }) => (_jsx(Box, { style: style, children: renderItem(items[index], index) }));
    if (items.length === 0) {
        return (_jsx(Box, { sx: {
                height,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }, children: _jsx(Typography, { color: "textSecondary", children: emptyMessage }) }));
    }
    return (_jsx(List, { ref: listRef, height: height, itemCount: items.length, itemSize: itemHeight, width: "100%", children: Row }));
};
