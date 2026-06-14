import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.VITE_BASE || '/',
  root: '.',
  server: {
    open: true,
    port: 5173
  },
  build: {
    outDir: 'dist'
  }
});
