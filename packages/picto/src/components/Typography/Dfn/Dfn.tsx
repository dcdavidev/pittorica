import React, { type ElementType } from 'react';

import clsx from 'clsx';

export interface DfnProps {
  as?: ElementType;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Dfn: React.FC<DfnProps> = ({
  as,
  children,
  className,
  style,
  ...rest
}) => {
  const Tag: ElementType = as || 'dfn';

  const classes = clsx(className);

  return (
    <Tag className={classes} style={{ display: 'inline', ...style }} {...rest}>
      {children}
    </Tag>
  );
};
