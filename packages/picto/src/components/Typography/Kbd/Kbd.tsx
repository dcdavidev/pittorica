import React, { type ElementType } from 'react';

import clsx from 'clsx';

export interface KbdProps {
  as?: ElementType;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Kbd: React.FC<KbdProps> = ({
  as,
  children,
  className,
  style,
  ...rest
}) => {
  const Tag: ElementType = as || 'kbd';

  const classes = clsx(className);

  return (
    <Tag className={classes} style={{ display: 'inline', ...style }} {...rest}>
      {children}
    </Tag>
  );
};
