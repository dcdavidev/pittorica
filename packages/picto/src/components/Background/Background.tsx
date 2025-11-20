'use client';

import React from 'react';

import { motion } from 'motion/react';

import {
  animations,
  backgroundRecipe,
  bubble,
  bubbleContainer,
  contentContainer,
} from './background.css.js';

export interface BackgroundProps extends React.PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
  /**
   * The type of background animation.
   * @default 'bubbles'
   */
  variant?: 'bubbles';
  /**
   * Array of hex colors for the bubbles.
   */
  colors?: string[];
  /**
   * Speed of the animation.
   * @default 15
   */
  animationSpeed?: number;
}

type BubblePosition = { x: number; y: number };

const DEFAULT_COLORS = [
  '#08A4BD',
  '#00B4C8',
  '#0099B6',
  '#006BA3',
  '#D87CAC',
  '#FF6B9D',
  '#FF1493',
  '#E60B7A',
  '#B45096',
  '#9D4EDD',
  '#7B2CBF',
  '#5A189A',
  '#00FF88',
  '#00E5A0',
  '#32C8DC',
  '#1DB5B5',
  '#FF6B35',
  '#FF8C42',
  '#FF9800',
  '#FF5733',
];

function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return '255,255,255';
  const r = Number.parseInt(result[1], 16);
  const g = Number.parseInt(result[2], 16);
  const b = Number.parseInt(result[3], 16);
  return `${r},${g},${b}`;
}

export const Background = ({
  className,
  style,
  children,
  variant = 'bubbles',
  colors = DEFAULT_COLORS,
  animationSpeed = 15,
}: BackgroundProps) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [bubblePositions, setBubblePositions] = React.useState<
    (BubblePosition & { id: string })[]
  >([]);

  const selectedColors = colors;
  const numBubbles = selectedColors.length;

  const generateBubblePositions = React.useCallback(() => {
    const cols = Math.ceil(Math.sqrt(numBubbles * 0.5));
    const rows = Math.ceil(numBubbles / cols);
    const totalCells = cols * rows;

    const availableCells = Array.from({ length: totalCells }, (_, i) => i);
    for (let i = availableCells.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [availableCells[i], availableCells[j]] = [
        availableCells[j],
        availableCells[i],
      ];
    }

    const cellWidth = 100 / cols;
    const cellHeight = 100 / rows;

    return availableCells.slice(0, numBubbles).map((cellIndex) => {
      const col = cellIndex % cols;
      const row = Math.floor(cellIndex / cols);

      const jitterX = (Math.random() - 0.5) * cellWidth * 1.2;
      const jitterY = (Math.random() - 0.5) * cellHeight * 1.2;

      return {
        id: `bubble-${Math.random().toString(36).slice(2, 11)}`,
        x: col * cellWidth + cellWidth / 2 + jitterX,
        y: row * cellHeight + cellHeight / 2 + jitterY,
      };
    });
  }, [numBubbles]);

  React.useEffect(() => {
    const positions = generateBubblePositions();
    // eslint-disable-next-line @eslint-react/hooks-extra/no-direct-set-state-in-use-effect
    setBubblePositions(positions);
  }, [generateBubblePositions]);

  const hasChildren = Boolean(children);

  // Use variant to determine render logic (currently only bubbles)
  const renderContent = () => {
    if (variant === 'bubbles') {
      return (
        <>
          {/* SVG Filter for Gooey Effect */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: 0,
              height: 0,
            }}
          >
            <defs>
              <filter id="gooey">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="10"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -8"
                  result="goo"
                />
                <feBlend in="SourceGraphic" in2="goo" />
              </filter>
            </defs>
          </svg>

          {/* Bubbles Container */}
          {bubblePositions.length > 0 && (
            <div className={bubbleContainer}>
              {selectedColors.map((color, i) => {
                const pos = bubblePositions[i];
                if (!pos) return null;

                const rgb = hexToRgb(color);
                const speed = animationSpeed + (i % 4) * 8;
                const animationType = [
                  animations.float,
                  animations.drift,
                  animations.pulse,
                ][i % 3];
                const baseSize = 600 + (i % 5) * 120;

                return (
                  <motion.div
                    key={pos.id}
                    className={bubble}
                    style={{
                      position: 'absolute',
                      left: `${pos.x}%`,
                      top: `${pos.y}%`,
                      width: `${baseSize}px`,
                      height: `${baseSize}px`,
                      background: `radial-gradient(circle at center, rgba(${rgb}, 0.8) 0%, rgba(${rgb}, 0.3) 50%, rgba(${rgb}, 0) 100%)`,
                      filter: `drop-shadow(0 0 30px rgba(${rgb}, 0.6))`,
                      animation: `${animationType} ${speed}s ease-in-out infinite, ${animations.wander} ${speed + 10}s ease-in-out infinite`,
                    }}
                    initial={{
                      opacity: 0,
                      scale: 0,
                      x: '-50%',
                      y: '-50%',
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      x: '-50%',
                      y: '-50%',
                    }}
                    transition={{
                      opacity: {
                        duration: 0.8,
                        ease: 'easeOut',
                        delay: i * 0.05,
                      },
                      scale: {
                        duration: 0.8,
                        ease: 'easeOut',
                        delay: i * 0.05,
                      },
                    }}
                  />
                );
              })}
            </div>
          )}
        </>
      );
    }
    return null;
  };

  return (
    <div
      ref={containerRef}
      className={`${backgroundRecipe({ position: hasChildren ? 'relative' : 'absolute' })} ${className || ''}`}
      style={style}
    >
      {renderContent()}

      {/* Content Container */}
      {hasChildren && <div className={contentContainer}>{children}</div>}
    </div>
  );
};
