'use client';

import React, { useMemo } from 'react';

import clsx from 'clsx';

import {
  motion,
  type MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from 'motion/react';

import {
  animations,
  backgroundRecipe,
  bubble,
  bubbleContainer,
  contentContainer,
} from './background.css.js';

// --- TYPES ---

export interface BackgroundProps extends React.PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
  variant?: 'bubbles';
  colors?: string[];
  animationSpeed?: number;
  interactive?: boolean;
}

type BubbleData = {
  id: string;
  x: number; // Percentage 0-100
  y: number; // Percentage 0-100
  color: string;
  baseSize: number;
  animationDelay: number;
  animationType: string;
  speed: number;
};

// --- CONSTANTS ---

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

// --- HELPERS ---

function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return '255,255,255';
  const r = Number.parseInt(result[1], 16);
  const g = Number.parseInt(result[2], 16);
  const b = Number.parseInt(result[3], 16);
  return `${r},${g},${b}`;
}

// --- SUB-COMPONENTS ---

/**
 * Individual Bubble component.
 * Uses MotionValues to update position without triggering React re-renders.
 */
const BubbleItem = ({
  data,
  mouseX,
  mouseY,
  interactive,
}: {
  data: BubbleData;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  interactive: boolean;
}) => {
  const rgb = useMemo(() => hexToRgb(data.color), [data.color]);

  // Physics settings for interaction
  const springConfig = { damping: 15, stiffness: 150, mass: 0.5 };

  // We calculate the attraction based on the MotionValue of the mouse
  // transform takes the mouse position and outputs the bubble offset
  const xOffset = useTransform(mouseX, (val: number) => {
    if (!interactive) return 0;
    // Approximation of distance checking using raw values for performance
    const dx = val - data.x;
    // If close (within 15% screen width), attract
    if (Math.abs(dx) < 15) {
      return dx * 0.5; // Attraction strength
    }
    return 0;
  });

  const yOffset = useTransform(mouseY, (val: number) => {
    if (!interactive) return 0;
    const dy = val - data.y;
    if (Math.abs(dy) < 15) {
      return dy * 0.5;
    }
    return 0;
  });

  // Apply spring physics to the calculated offset for smoothness
  const xSpring = useSpring(xOffset, springConfig);
  const ySpring = useSpring(yOffset, springConfig);

  return (
    <motion.div
      className={bubble}
      style={{
        position: 'absolute',
        left: `${data.x}%`,
        top: `${data.y}%`,
        width: `${data.baseSize}px`,
        height: `${data.baseSize}px`,
        background: `radial-gradient(circle at center, rgba(${rgb}, 0.8) 0%, rgba(${rgb}, 0.3) 50%, rgba(${rgb}, 0) 100%)`,
        filter: `drop-shadow(0 0 30px rgba(${rgb}, 0.6))`,
        // CSS Animation for passive floating
        animation: interactive
          ? 'none' // If interacting, we might want to pause CSS to let physics take over, or layer them
          : `${data.animationType} ${data.speed}s ease-in-out infinite, ${animations.wander} ${data.speed + 10}s ease-in-out infinite`,
        // Motion values for interactive movement
        x: interactive ? xSpring : '-50%',
        y: interactive ? ySpring : '-50%',
        translateX: '-50%', // Ensure centering works alongside motion x/y
        translateY: '-50%',
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        ease: 'easeOut',
        delay: data.animationDelay,
      }}
    />
  );
};

// --- MAIN COMPONENT ---

export const Background = ({
  className,
  style,
  children,
  variant = 'bubbles',
  colors = DEFAULT_COLORS,
  animationSpeed = 15,
  interactive = false,
}: BackgroundProps) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [bubbles, setBubbles] = React.useState<BubbleData[]>([]);

  // MotionValues for Mouse Position (Percentage 0-100)
  // Updating these DOES NOT trigger a React Render
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  // Generate Bubbles on Mount (Client-side only to avoid hydration mismatch)
  React.useEffect(() => {
    const numBubbles = colors.length;
    const cols = Math.ceil(Math.sqrt(numBubbles * 0.5));
    const rows = Math.ceil(numBubbles / cols);
    const cellWidth = 100 / cols;
    const cellHeight = 100 / rows;

    const availableCells = Array.from({ length: cols * rows }, (_, i) => i);

    // Shuffle positions
    for (let i = availableCells.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [availableCells[i], availableCells[j]] = [
        availableCells[j],
        availableCells[i],
      ];
    }

    const newBubbles: BubbleData[] = availableCells
      .slice(0, numBubbles)
      .map((cellIndex, i) => {
        const col = cellIndex % cols;
        const row = Math.floor(cellIndex / cols);
        const jitterX = (Math.random() - 0.5) * cellWidth * 1.2;
        const jitterY = (Math.random() - 0.5) * cellHeight * 1.2;

        return {
          id: `bubble-${Math.random().toString(36).slice(2, 11)}`,
          x: col * cellWidth + cellWidth / 2 + jitterX,
          y: row * cellHeight + cellHeight / 2 + jitterY,
          color: colors[i % colors.length],
          baseSize: 600 + (i % 5) * 120,
          animationDelay: i * 0.05,
          speed: animationSpeed + (i % 4) * 8,
          animationType: [animations.float, animations.drift, animations.pulse][
            i % 3
          ],
        };
      });

    // eslint-disable-next-line @eslint-react/hooks-extra/no-direct-set-state-in-use-effect
    setBubbles(newBubbles);
  }, [colors, animationSpeed]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
    const yPercent = ((e.clientY - rect.top) / rect.height) * 100;

    // Update MotionValues directly
    mouseX.set(xPercent);
    mouseY.set(yPercent);
  };

  const hasChildren = Boolean(children);

  return (
    <div
      ref={containerRef}
      className={clsx(
        backgroundRecipe({ position: hasChildren ? 'relative' : 'absolute' }),
        className
      )}
      style={style}
      onMouseMove={handleMouseMove}
    >
      {/* SVG Filter */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', width: 0, height: 0 }}
        aria-hidden="true"
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
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {/* Bubbles Render */}
      {variant === 'bubbles' && bubbles.length > 0 && (
        <div className={bubbleContainer}>
          {bubbles.map((bubbleData) => (
            <BubbleItem
              key={bubbleData.id}
              data={bubbleData}
              mouseX={mouseX}
              mouseY={mouseY}
              interactive={interactive}
            />
          ))}
        </div>
      )}

      {/* Content */}
      {hasChildren && <div className={contentContainer}>{children}</div>}
    </div>
  );
};
