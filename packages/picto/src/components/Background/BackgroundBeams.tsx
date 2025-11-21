'use client';

import { motion } from 'motion/react';

export const BackgroundBeams = ({
  color = '#FF0000',
  background,
}: {
  color?: string;
  background?: string;
}) => {
  const paths = Array.from({ length: 30 });

  // Gradient id must be unique per color to avoid SVG conflicts if multiple instances
  const gradientId = `beam-gradient-${color.replace('#', '')}`;

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        background: background,
      }}
    >
      <svg
        className="absolute w-full h-full pointer-events-none"
        width="100%"
        height="100%"
        viewBox="0 0 696 316"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', width: '100%', height: '100%' }}
      >
        {paths.map((_, i) => {
          const uniqueKey = `${gradientId}-${i}-${Math.random().toString(36).slice(2, 11)}`;
          return (
            <motion.path
              key={uniqueKey}
              d={generateWavyPath(i)}
              stroke={`url(#${gradientId})`}
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0, y: -50 }}
              animate={{
                pathLength: 1,
                opacity: [0, 0.6, 0],
                y: [0, 50],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                ease: 'linear',
                delay: Math.random() * 5,
              }}
            />
          );
        })}
        <defs>
          <linearGradient
            id={gradientId}
            x1="0"
            y1="0"
            x2="0"
            y2="1"
            gradientUnits="objectBoundingBox"
          >
            <stop stopColor={color} stopOpacity="0" />
            <stop offset="0.5" stopColor={color} stopOpacity="0.8" />
            <stop offset="1" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

function generateWavyPath(_index: number) {
  const startX = Math.random() * 696;
  const amplitude = 10 + Math.random() * 20;
  const frequency = 0.02 + Math.random() * 0.02;
  const height = 316;

  let path = `M ${startX} 0`;
  for (let y = 0; y <= height; y += 10) {
    const x = startX + Math.sin(y * frequency) * amplitude;
    path += ` L ${x} ${y}`;
  }
  return path;
}
