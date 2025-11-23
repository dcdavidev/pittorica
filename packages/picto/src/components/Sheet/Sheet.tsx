import React, { useEffect } from 'react';

import { createPortal } from 'react-dom';

import clsx from 'clsx';

import { IconX } from '@tabler/icons-react';

import { AnimatePresence, motion, PanInfo } from 'motion/react';

import { themeClass } from '../../styles/theme.css.js';
import {
  closeButton,
  content,
  dragHandle,
  header,
  overlay,
  sheetRecipe,
  titleStyle,
} from './sheet.css.js';

export type SheetProps = {
  isOpen: boolean;
  onClose: () => void;

  /**
   * Position of the sheet.
   * - 'bottom': Standard mobile sheet
   * - 'right': Side sheet (details)
   * - 'left': Navigation drawer style
   * @default 'right'
   */
  side?: 'bottom' | 'right' | 'left';

  title?: React.ReactNode;

  /**
   * Shows the drag handle bar (only visible if side='bottom')
   * @default true
   */
  showHandle?: boolean;

  children: React.ReactNode;

  className?: string;
};

// Animation variants configuration
const sheetVariants = {
  bottom: {
    hidden: { y: '100%' },
    visible: { y: 0 },
  },
  right: {
    hidden: { x: '100%' },
    visible: { x: 0 },
  },
  left: {
    hidden: { x: '-100%' },
    visible: { x: 0 },
  },
};

export const Sheet = ({
  isOpen,
  onClose,
  side = 'right',
  title,
  showHandle = true,
  children,
  className,
}: SheetProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      globalThis.addEventListener('keydown', handleEsc);
    }

    return () => {
      globalThis.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  // Helper to unlock scroll on exit complete
  const unlockScroll = () => {
    document.body.style.overflow = '';
  };

  // Drag Logic (Bottom Sheet only)
  const handleDragEnd = (_: never, info: PanInfo) => {
    if (info.offset.y > 100 || info.velocity.y > 500) {
      onClose();
    }
  };

  return createPortal(
    <AnimatePresence mode="wait" onExitComplete={unlockScroll}>
      {isOpen && (
        <>
          {/* BACKDROP / OVERLAY */}
          <motion.div
            className={overlay}
            onClick={onClose}
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />

          {/* SHEET CONTAINER */}
          <motion.div
            className={clsx(sheetRecipe({ side }), themeClass, className)}
            role="dialog"
            aria-modal="true"
            variants={sheetVariants[side]}
            initial="hidden"
            animate="visible"
            exit="hidden"
            // Animation physics
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 300,
              mass: 0.8,
            }}
            // Drag Logic
            drag={side === 'bottom' ? 'y' : false}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.2 }}
            onDragEnd={handleDragEnd}
          >
            {/* Drag Handle */}
            {side === 'bottom' && showHandle && <div className={dragHandle} />}

            {/* Header */}
            <div className={header}>
              {title ? <h2 className={titleStyle}>{title}</h2> : <div />}

              <button
                className={closeButton}
                onClick={onClose}
                aria-label="Close sheet"
              >
                <IconX size={24} />
              </button>
            </div>

            {/* Content */}
            <div className={content}>{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};
