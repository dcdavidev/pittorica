import React from 'react';

import { Typography } from '../Typography.js';

export interface SmallProps {
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

export const Small: React.FC<SmallProps> = (props) => {
  return <Typography {...props} small />;
};
