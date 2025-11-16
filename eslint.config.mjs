import spellbookx from 'eslint-plugin-spellbookx';

export default [
  ...spellbookx.configs['recommended-react'],
  {
    ignores: ['**/vite.config.*.timestamp*', '**/vitest.config.*.timestamp*'],
  },
];
