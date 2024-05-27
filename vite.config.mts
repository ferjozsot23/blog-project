import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: 'localhost',
    port: 4200,
    strictPort: true,
    https: false,
    open: true,
    cors: true,
  },
});
