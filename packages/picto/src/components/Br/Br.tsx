import React from 'react';

interface BrProps {
  style?: React.CSSProperties;
  className?: string;
}

const Br: React.FC<BrProps> = ({ style, className }) => {
  return <br style={style} className={className} />;
};

export default Br;