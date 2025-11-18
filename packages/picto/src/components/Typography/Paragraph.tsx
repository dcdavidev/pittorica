import React from 'react';

import { ColorToken } from '../../types/colors.js';
import {
  FontWeight,
  LetterSpacing,
  LineHeight,
  TypographyAlign,
  TypographySize,
} from '../../types/typography.js';
import { Typography } from './Typography.js';

export interface ParagraphProps {
  as?: React.ElementType;
  size?: TypographySize;
  weight?: FontWeight;
  lineHeight?: LineHeight;
  letterSpacing?: LetterSpacing;
  color?: string | ColorToken;
  align?: TypographyAlign;
  italic?: boolean;
  pre?: boolean;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  noMargins?: boolean;
  html?: boolean;
}

export const Paragraph: React.FC<ParagraphProps> = (props) => {
  return <Typography {...props} paragraph />;
};
