// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/hot-drink/',
  server: {
    port: 3000, // or whatever you want
  }
});
