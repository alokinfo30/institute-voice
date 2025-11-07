import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Institutes } from './pages/Institutes';
import { Teachers } from './pages/Teachers';
import { Students } from './pages/Students';
import { Settings } from './pages/Settings';
import { NotFound } from './pages/NotFound';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/institutes" element={<Institutes />} />
      <Route path="/teachers" element={<Teachers />} />
      <Route path="/students" element={<Students />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}