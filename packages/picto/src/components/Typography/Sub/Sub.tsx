import React from 'react';

import { Typography } from '../Typography.js';

export interface SubProps {
  as?: React.ElementType;
  size?: import('../../../types/typography.js').TypographySize;
  weight?: import('../../../types/typography.js').FontWeight;
  lineHeight?: import('../../../types/typography.js').LineHeight;
  letterSpacing?: import('../../../types/typography.js').LetterSpacing;
  color?: string | import('../../../types/colors.js').ColorToken;
  align?: import('../../../types/typography.js').TypographyAlign;
  italic?: boolean;
  pre?: boolean;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  noMargins?: boolean;
  html?: boolean;
}

export const Sub: React.FC<SubProps> = (props) => {
  return <Typography {...props} sub />;
};
