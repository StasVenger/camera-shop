/// <reference types='vitest' />
/// <reference types='vite/client' />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

const root = resolve(__dirname, 'src');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
  },
  resolve: {
    alias: {
      '@constants': resolve(root, 'constants'),
      '@components': resolve(root, 'components'),
      '@pages': resolve(root, 'pages'),
      '@services': resolve(root, 'services'),
      '@type': resolve(root, 'types'),
      '@store': resolve(root, 'store'),
      '@thunks': resolve(root, 'thunks'),
      '@hooks': resolve(root, 'hooks'),
      '@assets': resolve(root, 'assets'),
      '@utils': resolve(root, 'utils'),
    }
  }
});
