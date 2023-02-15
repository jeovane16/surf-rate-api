import path from 'path';
import { defineConfig } from 'vite';

const files = path.resolve(__dirname, '/');

export default defineConfig({
  test: {
    name: 'root-test',
  },
  resolve: {
    alias: {
      '@src': path.join(files, 'src'),
      '@test': path.join(files, 'test'),
    },
  },
});
