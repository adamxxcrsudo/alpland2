import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative asset paths keep GitHub Pages project deployments from loading a blank app.
export default defineConfig({
  base: './',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
