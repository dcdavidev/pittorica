import React, { type ElementType } from 'react';

import clsx from 'clsx';

export interface BdoProps {
  as?: ElementType;
  dir?: 'ltr' | 'rtl';
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Bdo: React.FC<BdoProps> = ({
  as,
  dir,
  children,
  className,
  style,
  ...rest
}) => {
  const Tag: ElementType = as || 'bdo';

  const classes = clsx(className);

  return (
    <Tag
      className={classes}
      dir={dir}
      style={{ display: 'inline', ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
};
