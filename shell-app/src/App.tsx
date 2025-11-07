import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { useAuth } from '@eduable/shared-components';
import { LoadingSpinner } from '@eduable/shared-components';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

// Lazy load micro-frontends
const StudentApp = lazy(() => import('@eduable/student-app'));
const TeacherApp = lazy(() => import('@eduable/teacher-app'));
const AdminApp = lazy(() => import('@eduable/admin-app'));

const App: React.FC = () => {
  const { isAuthenticated, isLoading, user } = useAuth();

  if (isLoading) {
    return <LoadingSpinner fullScreen message="Loading EduAble..." />;
  }

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Routes>
        <Route 
          path="/login" 
          element={!isAuthenticated ? <Login /> : <Navigate to="/" replace />} 
        />
        <Route 
          path="/*" 
          element={isAuthenticated ? <AuthenticatedApp user={user} /> : <Navigate to="/login" replace />} 
        />
      </Routes>
    </Box>
  );
};

const AuthenticatedApp: React.FC<{ user: any }> = ({ user }) => {
  const getAppBasedOnRole = () => {
    switch (user?.role) {
      case 'student':
        return <StudentApp />;
      case 'teacher':
        return <TeacherApp />;
      case 'admin':
      case 'institute_admin':
        return <AdminApp />;
      default:
        return <div>Unknown role</div>;
    }
  };
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner message="Loading application..." />}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/student/*" element={user?.role === 'student' ? getAppBasedOnRole() : <Navigate to="/" replace />} />
          <Route path="/teacher/*" element={user?.role === 'teacher' ? getAppBasedOnRole() : <Navigate to="/" replace />} />
          <Route path="/admin/*" element={(user?.role === 'admin' || user?.role === 'institute_admin') ? getAppBasedOnRole() : <Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;