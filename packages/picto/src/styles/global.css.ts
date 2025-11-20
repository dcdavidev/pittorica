import { globalStyle } from '@vanilla-extract/css';

import { vars } from './theme.css.js';

/**
 * Set box-sizing to border-box for all elements.
 */
globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

/**
 * Remove default margin and padding from body.
 */
globalStyle('body', {
  margin: 0,
  padding: 0,
  fontFamily: vars.typography.fonts.sans,
  backgroundColor: vars.colors.background,
  color: vars.colors.text,
  WebkitFontSmoothing: 'antialiased',
});

/**
 * Set default font size to 16px.
 */
globalStyle('html', {
  fontSize: '16px',
});
