import { defineConfig } from 'vite';
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  server: {
    host: process.env.HOST,
    port: 4201,
    strictPort: true,
    https: false,
    open: true,
    cors: true,
  },
});
