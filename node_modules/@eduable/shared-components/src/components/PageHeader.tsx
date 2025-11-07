import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import AddIcon from '@mui/icons-material/Add';

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

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  breadcrumbs,
  action,
}) => {
  return (
    <Box mb={4}>
      {breadcrumbs && breadcrumbs.length > 0 && (
  <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} sx={{ mb: 2 }}>
          {breadcrumbs.map((breadcrumb, index) => (
            <Link
              key={index}
              href={breadcrumb.href}
              color={index === breadcrumbs.length - 1 ? 'textPrimary' : 'inherit'}
              underline={index === breadcrumbs.length - 1 ? 'none' : 'hover'}
              sx={{ cursor: breadcrumb.href ? 'pointer' : 'default' }}
            >
              {breadcrumb.label}
            </Link>
          ))}
        </Breadcrumbs>
      )}
      
      <Box display="flex" justifyContent="space-between" alignItems="flex-start">
        <Box>
          <Typography variant="h4" component="h1" gutterBottom>
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="body1" color="textSecondary">
              {subtitle}
            </Typography>
          )}
        </Box>
        
        {action && (
          <Button
            variant="contained"
            startIcon={action.icon || <AddIcon />}
            onClick={action.onClick}
            size="large"
          >
            {action.label}
          </Button>
        )}
      </Box>
    </Box>
  );
};