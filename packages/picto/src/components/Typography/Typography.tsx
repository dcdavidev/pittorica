import React from 'react';

import clsx from 'clsx';

import { TextAlignToken } from '../../style/text-align.css.js';
import { typography } from '../../style/typography.css.js';
import { vars } from '../../style/vars.css.js';

type ColorToken = keyof typeof vars.color;
type TypographyVariant = 'body' | 'label';
type TypographySize = 'lg' | 'md' | 'sm';

interface TypographyProps {
  variant?: TypographyVariant;
  size?: TypographySize;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  color?: ColorToken;
  align?: TextAlignToken;
  space?: string;
}

const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  size = 'lg',
  children,
  style,
  className: additionalClassName,
  align,
  space,
  color,
}) => {
  const token = `${variant}-${size}` as const;
  const typographyClass = typography[token];

  let spaceStyle = {};
  if (space) {
    if (space === 'lg' || space === 'md' || space === 'sm') {
      // For semantic spacing, use vars.space
      const spaceValue = vars.space[space];
      spaceStyle = {
        paddingTop: spaceValue,
        paddingBottom: `calc(${spaceValue} / 2)`,
      };
    } else {
      spaceStyle = { paddingTop: space, paddingBottom: `calc(${space} / 2)` };
    }
  }

  const combinedClassName = clsx(typographyClass, additionalClassName);

  const Tag = variant === 'body' ? 'p' : 'span';

  return React.createElement(
    Tag,
    {
      className: combinedClassName,
      style: {
        color: color ? vars.color[color] : undefined,
        textAlign: align,
        ...spaceStyle,
        ...style,
      },
    },
    children
  );
};

export default Typography;
