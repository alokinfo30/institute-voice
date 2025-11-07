import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, } from '@mui/material';
export const ConfirmationDialog = ({ open, title, message, confirmText = 'Confirm', cancelText = 'Cancel', onConfirm, onCancel, severity = 'warning', }) => {
    const getConfirmButtonColor = () => {
        switch (severity) {
            case 'error':
                return 'error';
            case 'warning':
                return 'warning';
            case 'success':
                return 'success';
            default:
                return 'primary';
        }
    };
    return (_jsxs(Dialog, { open: open, onClose: onCancel, "aria-labelledby": "confirmation-dialog-title", "aria-describedby": "confirmation-dialog-description", maxWidth: "sm", fullWidth: true, children: [_jsx(DialogTitle, { id: "confirmation-dialog-title", children: title }), _jsx(DialogContent, { children: _jsx(DialogContentText, { id: "confirmation-dialog-description", children: message }) }), _jsxs(DialogActions, { children: [_jsx(Button, { onClick: onCancel, color: "inherit", children: cancelText }), _jsx(Button, { onClick: onConfirm, color: getConfirmButtonColor(), variant: "contained", autoFocus: true, children: confirmText })] })] }));
};
