import React, { type ElementType } from 'react';

import clsx from 'clsx';

export interface DelProps {
  as?: ElementType;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Del: React.FC<DelProps> = ({
  as,
  children,
  className,
  style,
  ...rest
}) => {
  const Tag: ElementType = as || 'del';

  const classes = clsx(className);

  return (
    <Tag
      className={classes}
      style={{ display: 'inline', color: 'inherit', ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
};
