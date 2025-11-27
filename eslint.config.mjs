import { defineConfig, globalIgnores } from 'eslint/config';
import spellbookx from 'eslint-plugin-spellbookx';

export default defineConfig([
  globalIgnores([
    'old/',
    '**/vite.config.*.timestamp*',
    '**/vitest.config.*.timestamp*',
    'packages/picto/',
  ]),
  ...spellbookx.configs['recommended-react'],
]);
