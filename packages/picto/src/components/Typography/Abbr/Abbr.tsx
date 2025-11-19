import React, { type ElementType } from 'react';

import clsx from 'clsx';

export interface AbbrProps {
  as?: ElementType;
  title?: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Abbr: React.FC<AbbrProps> = ({
  as,
  title,
  children,
  className,
  style,
  ...rest
}) => {
  const Tag: ElementType = as || 'abbr';

  const classes = clsx(className);

  return (
    <Tag
      className={classes}
      title={title}
      style={{ display: 'inline', ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
};
