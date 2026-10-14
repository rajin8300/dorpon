import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Project page on GitHub Pages: https://<user>.github.io/dorpon/
  base: '/dorpon/',
  plugins: [react()],
  server: {
    host: true, // Listens on all local IPs (0.0.0.0)
    port: 3000,
    open: false
  },
  preview: {
    host: true, // Listens on all local IPs for preview
    port: 4173,
    open: false
  }
});
