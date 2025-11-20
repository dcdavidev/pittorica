import '@fontsource/momo-trust-display';
import '@fontsource/momo-trust-sans';
import '../src/styles/global.css.js';

import React from 'react';

import type { Preview } from '@storybook/react';

import { vars } from '../src/styles/theme.css.js';
import { themeClass } from '../src/styles/theme.css.js';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: vars.colors.light },
        { name: 'dark', value: vars.colors.dark },
      ],
    },
  },

  decorators: [
    (Story) => (
      <div className={themeClass}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
