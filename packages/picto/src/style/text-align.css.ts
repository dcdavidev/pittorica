import { globalStyle } from '@vanilla-extract/css';

import { PREFIX } from '../consts.js';

export const TEXT_ALIGN_TOKEN = ['left', 'center', 'right', 'justify'] as const;

export type TextAlignToken = (typeof TEXT_ALIGN_TOKEN)[number];

// Global text alignment utility classes
globalStyle(`.${PREFIX}-text-left`, {
  textAlign: 'left',
});

globalStyle(`.${PREFIX}-text-center`, {
  textAlign: 'center',
});

globalStyle(`.${PREFIX}-text-right`, {
  textAlign: 'right',
});

globalStyle(`.${PREFIX}-text-justify`, {
  textAlign: 'justify',
});
