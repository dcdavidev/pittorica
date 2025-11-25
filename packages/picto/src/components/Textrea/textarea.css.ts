import { style } from '@vanilla-extract/css';

import { atoms } from '../../styles/sprinkles.css.js';
import { vars } from '../../styles/theme.css.js';

export const textareaBase = style([
  atoms({
    padding: 'small',
    borderRadius: 'small',
  }),
  {
    width: '100%',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
    lineHeight: 1.5,
    resize: 'vertical',

    border: `1px solid ${vars.colors.uiBorder}`,
    backgroundColor: vars.colors.uiBackground,
    color: vars.colors.text,

    ':focus': {
      outline: 'none',
      boxShadow: `0 0 0 2px ${vars.colors.uiFocusRing}`,
      borderColor: 'transparent',
    },
  },
]);
