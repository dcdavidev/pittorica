'use client';

import React from 'react';

import moonImg from './assets/moon.webp';

/**
 * Renders a Moon-like background using a local WebP asset.
 * Simplifies the structure by using CSS background-image for both the image and the fade overlay.
 *
 * @returns {React.JSX.Element} The rendered Moon background component.
 */
export const BackgroundMoon = (): React.JSX.Element => {
  const imgSrc =
    typeof moonImg === 'string' ? moonImg : (moonImg as { src: string }).src;

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: '#000000', // Deep black base

        // Combine Gradient Overlay (Top) and Moon Image (Bottom) in one go
        backgroundImage: `
          radial-gradient(circle at center, transparent 50%, rgba(0,0,0,0.6) 100%),
          url(${imgSrc})
        `,

        // Standard centering and covering
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',

        // Apply filters to the background layer (affects both image and gradient, which is fine)
        filter:
          'grayscale(100%) contrast(1.1) drop-shadow(0 0 60px rgba(255,255,255,0.05))',

        pointerEvents: 'none',
      }}
    />
  );
};
