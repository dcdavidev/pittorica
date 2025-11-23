import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

// REMOVED: import { atoms } ... (unused)
import { vars } from '../../styles/theme.css.js';

// --- Z-INDEX CONFIGURATION ---
const zIndex = {
  overlay: 10_000, // Fixed: Added numeric separator
  sheet: 10_001,
};

// --- OVERLAY (BACKDROP) ---
export const overlay = style({
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  zIndex: zIndex.overlay,
  backdropFilter: 'blur(2px)',
});

// --- SHEET CONTAINER ---
export const sheetRecipe = recipe({
  base: style({
    position: 'fixed',
    zIndex: zIndex.sheet,
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.15)',
    overflow: 'hidden',
    maxHeight: '100dvh',
    willChange: 'transform',
    boxSizing: 'border-box',

    // Explicit background color using raw vars to prevent transparency issues
    backgroundColor: vars.colors.background,
  }),

  variants: {
    side: {
      bottom: style({
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        maxHeight: '90vh',
        borderTopLeftRadius: '28px',
        borderTopRightRadius: '28px',
      }),
      right: style({
        top: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        maxWidth: '400px',
        borderTopLeftRadius: '28px',
        borderBottomLeftRadius: '28px',
      }),
      left: style({
        top: 0,
        left: 0,
        bottom: 0,
        width: '100%',
        maxWidth: '400px',
        borderTopRightRadius: '28px',
        borderBottomRightRadius: '28px',
      }),
    },
  },

  defaultVariants: {
    side: 'right',
  },
});

// --- INTERNAL ELEMENTS ---

export const dragHandle = style({
  width: '32px',
  height: '4px',
  backgroundColor: vars.colors.gray[300],
  borderRadius: vars.border.radius.full,
  margin: '0 auto',
  marginTop: vars.space.medium,
  marginBottom: vars.space.small,
  flexShrink: 0,
});

export const header = style({
  // Using raw CSS values for padding to guarantee spacing
  paddingLeft: vars.space.xlarge,
  paddingRight: vars.space.xlarge,
  paddingTop: vars.space.large,
  paddingBottom: vars.space.medium,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
});

export const titleStyle = style({
  fontFamily: vars.typography.fonts.sans,
  fontSize: vars.typography.fontSizes.headlineSmall,
  fontWeight: vars.typography.fontWeights.medium,
  color: vars.colors.text,
  margin: 0,
});

export const content = style({
  paddingLeft: vars.space.xlarge,
  paddingRight: vars.space.xlarge,
  paddingBottom: vars.space.xlarge,

  flex: 1,
  overflowY: 'auto',
  paddingTop: 0,
});

export const closeButton = style({
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  padding: vars.space.small,
  borderRadius: vars.border.radius.full,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: vars.colors.gray[600],
  transition: 'background-color 0.2s',
  ':hover': {
    backgroundColor: vars.colors.gray[100],
  },
});
