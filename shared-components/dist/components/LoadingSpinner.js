import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CircularProgress, Box, Typography } from '@mui/material';
export const LoadingSpinner = ({ size = 40, message, fullScreen = false, }) => {
    const content = (_jsxs(Box, { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2, children: [_jsx(CircularProgress, { size: size }), message && (_jsx(Typography, { variant: "body2", color: "textSecondary", children: message }))] }));
    if (fullScreen) {
        return (_jsx(Box, { position: "fixed", top: 0, left: 0, right: 0, bottom: 0, display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "background.paper", zIndex: 9999, children: content }));
    }
    return content;
};
