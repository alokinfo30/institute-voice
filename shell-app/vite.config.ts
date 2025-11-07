import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    cors: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@eduable/student-app': resolve(__dirname, '../student-app/dist/student-app.js'),
      '@eduable/teacher-app': resolve(__dirname, '../teacher-app/dist/teacher-app.js'),
      '@eduable/admin-app': resolve(__dirname, '../admin-app/dist/admin-app.js'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      external: [],
    },
  },
});