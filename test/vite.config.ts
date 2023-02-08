import path from 'path';
import { defineConfig } from 'vite';

const files = path.resolve(__dirname, '../');

export default defineConfig({
  test: {
    setupFiles: ['./test/vite-setup.ts'],
  },
  resolve: {
    alias: {
      '@src': path.join(files, 'src'),
      '@test': path.join(files, 'test'),
    },
  },
});
