import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { useAuth } from '@eduable/shared-components';
import TeacherLayout from './components/TeacherLayout';
import TeacherDashboard from './pages/TeacherDashboard';
import ManageCourses from './pages/ManageCourses';
import StudentProgress from './pages/StudentProgress';
import DoubtResolution from './pages/DoubtResolution';
import Analytics from './pages/Analytics';

const TeacherApp: React.FC = () => {
  const { user } = useAuth();

  if (!user || user.role !== 'teacher') {
    return <Navigate to="/login" replace />;
  }

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <TeacherLayout>
        <Routes>
          <Route path="/" element={<TeacherDashboard />} />
          <Route path="/dashboard" element={<TeacherDashboard />} />
          <Route path="/courses" element={<ManageCourses />} />
          <Route path="/courses/:courseId" element={<div>Course Management</div>} />
          <Route path="/students" element={<StudentProgress />} />
          <Route path="/doubts" element={<DoubtResolution />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </TeacherLayout>
    </Box>
  );
};

export default TeacherApp;