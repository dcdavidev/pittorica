import React, { type ElementType } from 'react';

import clsx from 'clsx';

import { ColorToken } from '../../../types/colors.js';
import { FontWeight } from '../../../types/typography.js';
import { getColorClass, getWeightClass } from '../helpers.js';

export interface BProps {
  as?: ElementType;
  weight?: FontWeight;
  color?: string | ColorToken;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const B: React.FC<BProps> = ({
  as,
  weight = 'bold',
  color,
  children,
  className,
  style,
  ...rest
}) => {
  const Tag: ElementType = as || 'b';

  const weightClass = getWeightClass(weight);
  const colorClass = getColorClass(color);

  const classes = clsx(weightClass, colorClass, className);

  return (
    <Tag className={classes} style={{ display: 'inline', ...style }} {...rest}>
      {children}
    </Tag>
  );
};
