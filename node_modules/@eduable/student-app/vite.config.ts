import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    cors: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@eduable/shared-components': resolve(__dirname, '../shared-components/dist/index.js'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/student-app.tsx'),
      name: 'studentApp',
      formats: ['es'],
      fileName: 'student-app',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-router-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-router-dom': 'ReactRouterDOM',
        },
      },
    },
  },
});