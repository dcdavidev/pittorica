import React from 'react';

import clsx from 'clsx';

import { TextAlignToken, typography, vars } from '../../style/index.js';
import { TextColor } from '../../types/colors.js';

type TypographyVariant = 'body' | 'label';
type TypographySize = 'lg' | 'md' | 'sm';

interface TypographyProps {
  variant?: TypographyVariant;
  size?: TypographySize;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  color?: TextColor;
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

  let spaceStyle: React.CSSProperties = {};
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

  const colorStyle: React.CSSProperties = color
    ? {
        color:
          color === 'transparent'
            ? 'transparent'
            : vars.color[color as keyof typeof vars.color],
      }
    : {};

  return React.createElement(
    Tag,
    {
      className: combinedClassName,
      style: {
        textAlign: align,
        ...spaceStyle,
        ...style,
        ...colorStyle,
      },
    },
    children
  );
};

export default Typography;
