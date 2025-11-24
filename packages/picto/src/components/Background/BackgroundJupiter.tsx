'use client';

import React, { useId } from 'react';

import { motion } from 'motion/react';

/**
 * Renders a Jupiter-like background with animated gaseous bands using SVG filters.
 *
 * @returns {React.JSX.Element} The rendered Jupiter background component.
 */
export const BackgroundJupiter = (): React.JSX.Element => {
  // Generate unique IDs to avoid conflicts in SPAs/Storybook
  const uniqueId = useId().replaceAll(':', ''); // Remove colons for CSS valid IDs
  const gradientId = `jupiter-bands-${uniqueId}`;
  const filterId = `jupiter-gas-${uniqueId}`;

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        backgroundColor: '#1a1008', // Deep space dark brown base
      }}
    >
      <svg
        width="100%"
        height="100%"
        style={{
          position: 'absolute',
          inset: 0,
        }}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          {/* The base texture of the planet: horizontal bands of color.
            We distort this gradient with the turbulence filter below.
          */}
          <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#2c211b" />
            <stop offset="10%" stopColor="#4b362a" />
            <stop offset="25%" stopColor="#a87b59" />
            <stop offset="40%" stopColor="#d6b89c" />
            <stop offset="50%" stopColor="#8c5e42" />
            <stop offset="65%" stopColor="#cba383" />
            <stop offset="80%" stopColor="#5d3f31" />
            <stop offset="100%" stopColor="#2c211b" />
          </linearGradient>

          {/* Filter region needs to be larger than the element to avoid clipping
            during the displacement effect or sliding animation.
          */}
          <filter
            id={filterId}
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            colorInterpolationFilters="sRGB"
          >
            {/* Generates the turbulent noise map.
               baseFrequency="0.005 0.03" -> Stretches noise horizontally (bands).
             */}
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.005 0.03"
              numOctaves="3"
              seed="1"
              stitchTiles="stitch"
              result="noise"
            />

            {/* Displaces the gradient using the noise.
               scale="50" determines the intensity of the "swirls".
             */}
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="50"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>

        {/* The main visual layer.
          1. Filled with the gradient.
          2. Distorted by the filter.
          3. Oversized width (120%) to allow sliding animation without gaps.
        */}
        <rect
          width="120%"
          height="100%"
          fill={`url(#${gradientId})`}
          filter={`url(#${filterId})`}
          x="-10%"
        >
          {/* Subtle sliding animation to simulate planetary rotation/wind */}
          <animate
            attributeName="x"
            from="-10%"
            to="-5%"
            dur="60s"
            repeatCount="indefinite"
            calcMode="linear"
          />
        </rect>
      </svg>

      {/* Gradient Overlay for shadowing (Planetary sphere effect) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 50% 50%, transparent 40%, #000000 100%)',
          mixBlendMode: 'multiply',
          pointerEvents: 'none',
        }}
      />

      {/* Atmospheric Glow */}
      <motion.div
        initial={{ opacity: 0.1 }}
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 40% 40%, rgba(255, 200, 150, 0.15) 0%, transparent 60%)',
          pointerEvents: 'none',
          mixBlendMode: 'screen',
        }}
      />
    </div>
  );
};
