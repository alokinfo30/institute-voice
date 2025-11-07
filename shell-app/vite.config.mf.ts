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
      // Prefer built output of shared-components to avoid serving TS sources
      '@eduable/shared-components': resolve(__dirname, '../shared-components/dist/index.js'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/main.tsx'),
      name: 'shell',
      formats: ['es'],
      fileName: 'shell',
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