import React from 'react';

import clsx from 'clsx';

export interface BrProps {
  className?: string;
  style?: React.CSSProperties;
}

export const Br: React.FC<BrProps> = ({ className, style }) => {
  return <br className={clsx(className)} style={style} />;
};
