import React from 'react';
interface PageHeaderProps {
    title: string;
    subtitle?: string;
    breadcrumbs?: Array<{
        label: string;
        href?: string;
    }>;
    action?: {
        label: string;
        onClick: () => void;
        icon?: React.ReactNode;
    };
}
export declare const PageHeader: React.FC<PageHeaderProps>;
export {};
