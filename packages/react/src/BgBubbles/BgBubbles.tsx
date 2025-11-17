'use client';

import React from 'react';

import { motion } from 'motion/react';

interface BgBubblesProps extends React.PropsWithChildren {
  className?: string;
  colors?: string[];
  style?: React.CSSProperties;
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

export default function BgBubbles({
  className = '',
  style,
  children,
  colors = DEFAULT_COLORS,
  animationSpeed = 15,
}: BgBubblesProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [bubblePositions, setBubblePositions] = React.useState<
    BubblePosition[]
  >([]);

  const selectedColors = colors;
  const numBubbles = selectedColors.length;
  const rgbColors = selectedColors.map((color) => hexToRgb(color));

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
        x: col * cellWidth + cellWidth / 2 + jitterX,
        y: row * cellHeight + cellHeight / 2 + jitterY,
      };
    });
  }, [numBubbles]);

  React.useEffect(() => {
    // eslint-disable-next-line @eslint-react/hooks-extra/no-direct-set-state-in-use-effect
    setBubblePositions(generateBubblePositions());
  }, [generateBubblePositions]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        background: 'transparent',
        ...style,
      }}
    >
      <style>{`
        :root {
          ${rgbColors.map((color, i) => `--bubble-color-${i}: ${color};`).join('\n')}
        }

        @keyframes float {
          0%, 100% { transform: translateY(-80px); }
          50% { transform: translateY(80px); }
        }

        @keyframes drift {
          0%, 100% { transform: translateX(-80px); }
          50% { transform: translateX(80px); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(0.9); }
          50% { transform: scale(1.15); }
        }

        @keyframes wander {
          0% { transform: translate(0, 0); }
          25% { transform: translate(50px, -50px); }
          50% { transform: translate(-30px, 40px); }
          75% { transform: translate(60px, 30px); }
          100% { transform: translate(0, 0); }
        }

        .bubble-container {
          position: absolute;
          inset: -40%;
          filter: url(#gooey) blur(80px);
          mix-blend-mode: normal;
        }

        ${rgbColors
          .map((_, i) => {
            const speed = animationSpeed + (i % 4) * 8;
            const animationType = ['float', 'drift', 'pulse'][i % 3];
            const baseSize = 600 + (i % 5) * 120;

            return `
              .bubble-${i} {
                width: ${baseSize}px;
                height: ${baseSize}px;
                border-radius: 50%;
                background: radial-gradient(
                  circle at center,
                  rgba(var(--bubble-color-${i}), 0.8) 0%,
                  rgba(var(--bubble-color-${i}), 0.3) 50%,
                  rgba(var(--bubble-color-${i}), 0) 100%
                );
                mix-blend-mode: normal;
                animation: ${animationType} ${speed}s ease-in-out infinite, wander ${speed + 10}s ease-in-out infinite;
                filter: drop-shadow(0 0 30px rgba(var(--bubble-color-${i}), 0.6));
                transition: mix-blend-mode 0.3s ease;
              }

              .bubble-${i}:hover {
                mix-blend-mode: screen;
              }
            `;
          })
          .join('\n')}
      `}</style>

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

      {bubblePositions.length > 0 && (
        <div className="bubble-container">
          {selectedColors.map((color, i) => {
            const pos = bubblePositions[i];
            if (!pos) return null;

            return (
              <motion.div
                key={color}
                className={`bubble-${i}`}
                style={{
                  position: 'absolute',
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
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
                  opacity: { duration: 0.8, ease: 'easeOut', delay: i * 0.05 },
                  scale: { duration: 0.8, ease: 'easeOut', delay: i * 0.05 },
                }}
              />
            );
          })}
        </div>
      )}

      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          height: '100%',
        }}
      >
        {children}
      </div>
    </div>
  );
}
