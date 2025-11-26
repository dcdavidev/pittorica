import '@fontsource/momo-trust-display';
import '@fontsource-variable/fira-code';
import '@fontsource-variable/inter';
import '@fontsource-variable/roboto-serif';
import '../src/styles/global.css.js';

import { Preview } from '@storybook/react-vite';

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    globals: {
      measureEnabled: false,
      backgrounds: {},
      outline: false,
      viewport: {},
    },
  },

  decorators: [(Story) => <Story />],
};

export default preview;
