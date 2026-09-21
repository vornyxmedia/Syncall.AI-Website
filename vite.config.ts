import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Served from the custom domain root (syncall.ai), not a GitHub Pages subpath.
  base: '/',
  plugins: [react()],
  server: {
    port: 3000,
    open: false,
  },
});
