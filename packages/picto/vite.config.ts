/// <reference types='vitest' />
import path from 'node:path';

import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig(() => ({
  root: import.meta.dirname,
  cacheDir: '../../node_modules/.vite/packages/picto',
  plugins: [
    react(),
    dts({
      entryRoot: 'src',
      tsconfigPath: path.join(import.meta.dirname, 'tsconfig.lib.json'),
    }),
    vanillaExtractPlugin({
      identifiers: ({ debugId, filePath }) => {
        const name =
          debugId || filePath.split('/').pop()?.split('.')[0] || 'style';

        const kebabName = name
          .replaceAll('_', '-')
          .replaceAll(/([a-z0-9])([A-Z])/g, '$1-$2')
          .toLowerCase();

        return `picto-${kebabName}`;
      },
    }),
  ],
  build: {
    outDir: './dist',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: 'src/index.ts',
      name: '@pittorica/picto',
      fileName: 'index',
      formats: ['es' as const],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
  },
}));
