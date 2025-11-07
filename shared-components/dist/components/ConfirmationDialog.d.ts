import React from 'react';
interface ConfirmationDialogProps {
    open: boolean;
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    onConfirm: () => void;
    onCancel: () => void;
    severity?: 'error' | 'warning' | 'info' | 'success';
}
export declare const ConfirmationDialog: React.FC<ConfirmationDialogProps>;
export {};
