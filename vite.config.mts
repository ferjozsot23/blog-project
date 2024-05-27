import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: process.env.HOST,
    port: 4200,
    strictPort: true,
    https: false,
    open: true,
    cors: true,
  },
});
