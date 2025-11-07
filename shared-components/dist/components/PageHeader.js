import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import AddIcon from '@mui/icons-material/Add';
export const PageHeader = ({ title, subtitle, breadcrumbs, action, }) => {
    return (_jsxs(Box, { mb: 4, children: [breadcrumbs && breadcrumbs.length > 0 && (_jsx(Breadcrumbs, { separator: _jsx(NavigateNextIcon, { fontSize: "small" }), sx: { mb: 2 }, children: breadcrumbs.map((breadcrumb, index) => (_jsx(Link, { href: breadcrumb.href, color: index === breadcrumbs.length - 1 ? 'textPrimary' : 'inherit', underline: index === breadcrumbs.length - 1 ? 'none' : 'hover', sx: { cursor: breadcrumb.href ? 'pointer' : 'default' }, children: breadcrumb.label }, index))) })), _jsxs(Box, { display: "flex", justifyContent: "space-between", alignItems: "flex-start", children: [_jsxs(Box, { children: [_jsx(Typography, { variant: "h4", component: "h1", gutterBottom: true, children: title }), subtitle && (_jsx(Typography, { variant: "body1", color: "textSecondary", children: subtitle }))] }), action && (_jsx(Button, { variant: "contained", startIcon: action.icon || _jsx(AddIcon, {}), onClick: action.onClick, size: "large", children: action.label }))] })] }));
};
