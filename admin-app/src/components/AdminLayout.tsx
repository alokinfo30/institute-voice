import React from 'react';
import { Layout } from './Layout';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <Layout>{children}</Layout>;
}
