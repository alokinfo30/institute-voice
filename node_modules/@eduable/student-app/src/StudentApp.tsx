import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { useAuth } from '@eduable/shared-components';
import StudentLayout from './components/StudentLayout';
import StudentDashboard from './pages/StudentDashboard';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import ContentPlayer from './pages/ContentPlayer';
import Doubts from './pages/Doubts';
import Performance from './pages/Performance';

const StudentApp: React.FC = () => {
  const { user } = useAuth();

  if (!user || user.role !== 'student') {
    return <Navigate to="/login" replace />;
  }

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <StudentLayout>
        <Routes>
          <Route path="/" element={<StudentDashboard />} />
          <Route path="/dashboard" element={<StudentDashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId" element={<CourseDetail />} />
          <Route path="/courses/:courseId/content/:contentId" element={<ContentPlayer />} />
          <Route path="/doubts" element={<Doubts />} />
          <Route path="/doubts/:doubtId" element={<div>Doubt Detail</div>} />
          <Route path="/performance" element={<Performance />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </StudentLayout>
    </Box>
  );
};

export default StudentApp;