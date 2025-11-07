import React from 'react';
interface VirtualizedListProps {
    items: any[];
    height: number;
    itemHeight: number;
    renderItem: (item: any, index: number) => React.ReactNode;
    emptyMessage?: string;
}
export declare const VirtualizedList: React.FC<VirtualizedListProps>;
export {};
