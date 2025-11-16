/// <reference types='vitest' />
import path from 'node:path';

import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig(() => ({
  root: import.meta.dirname,
  cacheDir: '../node_modules/.vite/pittorica',
  plugins: [
    dts({
      entryRoot: 'src',
      tsconfigPath: path.join(import.meta.dirname, 'tsconfig.lib.json'),
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
      name: 'pittorica',
      fileName: 'index',
      formats: ['es' as const, 'cjs' as const],
      entry: {
        index: path.resolve(import.meta.dirname, 'src/index.css'),
        tokens: path.resolve(import.meta.dirname, 'src/tokens.ts'),
      },
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: [],
      output: {
        entryFileNames: ({ name }) => {
          return `${name}.js`;
        },
      },
    },
  },
}));
