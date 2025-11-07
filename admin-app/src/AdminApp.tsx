import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { useAuth } from '@eduable/shared-components';
import AdminLayout from './components/AdminLayout';
import AdminDashboard from './pages/AdminDashboard';
import UserManagement from './pages/UserManagement';
import InstituteSettings from './pages/InstituteSettings';
import Billing from './pages/Billing';
import SystemAnalytics from './pages/SystemAnalytics';

const AdminApp: React.FC = () => {
  const { user } = useAuth();

  if (!user || (user.role !== 'admin' && user.role !== 'institute_admin')) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <AdminLayout>
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/users" element={<UserManagement />} />
          <Route path="/settings" element={<InstituteSettings />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/analytics" element={<SystemAnalytics />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AdminLayout>
    </Box>
  );
};

export default AdminApp;