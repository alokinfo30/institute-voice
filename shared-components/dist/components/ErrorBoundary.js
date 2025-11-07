import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Component } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
export class ErrorBoundary extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            hasError: false
        };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }
    componentDidCatch(error, errorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }
            return (_jsx(Box, { display: "flex", justifyContent: "center", alignItems: "center", minHeight: "400px", p: 3, children: _jsxs(Paper, { elevation: 0, sx: {
                        p: 4,
                        textAlign: 'center',
                        maxWidth: 500,
                        border: '1px solid',
                        borderColor: 'error.light',
                        borderRadius: 2
                    }, children: [_jsx(ErrorOutlineIcon, { sx: { fontSize: 64, color: 'error.main', mb: 2 } }), _jsx(Typography, { variant: "h5", gutterBottom: true, color: "error", children: "Something went wrong" }), _jsx(Typography, { variant: "body1", color: "textSecondary", paragraph: true, children: "We're sorry, but something went wrong. Please try refreshing the page." }), this.state.error && (_jsxs(Typography, { variant: "body2", component: "details", sx: { textAlign: 'left', mb: 2 }, children: [_jsx("summary", { children: "Error Details" }), _jsx("pre", { style: { whiteSpace: 'pre-wrap', fontSize: '12px' }, children: this.state.error.message })] })), _jsx(Button, { variant: "contained", color: "primary", onClick: () => window.location.reload(), children: "Refresh Page" })] }) }));
        }
        return this.props.children;
    }
}
