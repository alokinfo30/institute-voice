import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Typography, Button } from '@mui/material';
export const EmptyState = ({ icon, title, description, action, }) => {
    return (_jsxs(Box, { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", py: 8, px: 2, children: [icon && (_jsx(Box, { sx: { fontSize: 64, color: 'text.secondary', mb: 2 }, children: icon })), _jsx(Typography, { variant: "h6", gutterBottom: true, color: "textPrimary", children: title }), description && (_jsx(Typography, { variant: "body1", color: "textSecondary", paragraph: true, maxWidth: 400, children: description })), action && (_jsx(Button, { variant: "contained", onClick: action.onClick, children: action.label }))] }));
};
