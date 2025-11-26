import { globalStyle } from '@vanilla-extract/css';

import { pitto } from './theme/contract.css';

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
});

globalStyle('html', {
  fontSize: pitto.font.size.root,
});

globalStyle('body', {
  fontFamily: pitto.font.family.sans,
  fontSize: pitto.font.size.body.medium,

  backgroundColor: pitto.surface[0].color,
  color: pitto.surface[0].onColor,
});
