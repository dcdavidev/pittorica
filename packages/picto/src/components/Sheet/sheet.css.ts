import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '../../styles/theme.css.js';

const sizes = {
  small: '40rem',
  medium: '48rem',
  large: '64rem',
  xlarge: '80rem',
  xxlarge: '96rem',
};

const zIndex = {
  overlay: 10_000,
  sheet: 10_001,
};

export const overlay = style({
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  zIndex: zIndex.overlay,
  backdropFilter: 'blur(2px)',
});

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
    backgroundColor: vars.colors.background,
    // Default text color from theme, ensuring inheritance works if not overridden
    color: vars.colors.text,
  }),

  variants: {
    side: {
      bottom: style({
        bottom: 0,
        left: 0,
        right: 0,
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

    width: {
      full: style({ width: '100%' }),
      small: style({
        width: '100%',
        maxWidth: sizes.small,
        marginInline: 'auto',
      }),
      medium: style({
        width: '100%',
        maxWidth: sizes.medium,
        marginInline: 'auto',
      }),
      large: style({
        width: '100%',
        maxWidth: sizes.large,
        marginInline: 'auto',
      }),
      xlarge: style({
        width: '100%',
        maxWidth: sizes.xlarge,
        marginInline: 'auto',
      }),
      xxlarge: style({
        width: '100%',
        maxWidth: sizes.xxlarge,
        marginInline: 'auto',
      }),
    },
  },

  defaultVariants: {
    side: 'right',
    width: 'full',
  },
});

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
  paddingLeft: vars.space.large,
  paddingRight: vars.space.large,
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
  margin: 0,
  color: 'inherit',
});

export const content = style({
  paddingLeft: vars.space.small,
  paddingRight: vars.space.small,
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
  color: 'inherit',
  opacity: 0.7,
  transition: 'background-color 0.2s, opacity 0.2s',
  ':hover': {
    backgroundColor: 'rgba(0,0,0, 0.05)', // Hover generico
    opacity: 1,
  },
});
