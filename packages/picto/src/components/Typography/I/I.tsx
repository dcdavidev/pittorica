import React, { type ElementType } from 'react';

import clsx from 'clsx';

export interface IProps {
  as?: ElementType;
  italic?: boolean;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const I: React.FC<IProps> = ({
  as,
  italic = true,
  children,
  className,
  style,
  ...rest
}) => {
  const Tag: ElementType = as || 'i';

  const classes = clsx(italic && 'picto-text-italic', className);

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
