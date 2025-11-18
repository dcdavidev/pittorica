// Utility mapping functions (single declaration)

import type {
  FontWeight,
  LetterSpacing,
  LineHeight,
} from '../../types/typography.js';

/**
 * Returns the CSS class for the given font weight value.
 * @param w The font weight string ('regular', 'medium', 'semibold', 'bold').
 * @returns The corresponding CSS class string, or empty string if not found.
 * @example
 * getWeightClass('regular') // 'picto-font-weight-regular'
 * getWeightClass('bold') // 'picto-font-weight-bold'
 */
export function getWeightClass(w?: FontWeight) {
  switch (w) {
    case 'regular': {
      return 'picto-font-weight-regular';
    }
    case 'medium': {
      return 'picto-font-weight-medium';
    }
    case 'semibold': {
      return 'picto-font-weight-semibold';
    }
    case 'bold': {
      return 'picto-font-weight-bold';
    }
    default: {
      return '';
    }
  }
}

/**
 * Returns the CSS class for the given line height value.
 * @param lh The line height string ('normal', 'tight', 'loose').
 * @returns The corresponding CSS class string, or empty string if not found.
 * @example
 * getLineHeightClass('normal') // 'picto-line-height-normal'
 * getLineHeightClass('tight') // 'picto-line-height-tight'
 */
export function getLineHeightClass(lh?: LineHeight) {
  switch (lh) {
    case 'tight': {
      return 'picto-line-height-tight';
    }
    case 'normal': {
      return 'picto-line-height-normal';
    }
    case 'loose': {
      return 'picto-line-height-relaxed';
    }
    default: {
      return '';
    }
  }
}

/**
 * Returns the CSS class for the given letter spacing value.
 * @param ls The letter spacing string ('normal', 'wide', 'wider').
 * @returns The corresponding CSS class string, or empty string if not found.
 * @example
 * getLetterSpacingClass('normal') // 'picto-tracking-normal'
 * getLetterSpacingClass('wider') // 'picto-tracking-wider'
 */
export function getLetterSpacingClass(ls?: LetterSpacing) {
  switch (ls) {
    case 'normal': {
      return 'picto-tracking-normal';
    }
    case 'wide': {
      return 'picto-tracking-wide';
    }
    case 'wider': {
      return 'picto-tracking-wider';
    }
    default: {
      return '';
    }
  }
}

/**
 * Returns the CSS class for the given color name.
 * @param c The color name string ('primary', 'secondary', etc.).
 * @returns The corresponding CSS class string, or empty string if not found.
 * @example
 * getColorClass('primary') // 'picto-text-primary'
 * getColorClass('error') // 'picto-text-error'
 */
export function getColorClass(c?: string) {
  switch (c) {
    case 'primary': {
      return 'picto-text-primary';
    }
    case 'secondary': {
      return 'picto-text-secondary';
    }
    case 'tertiary': {
      return 'picto-text-tertiary';
    }
    case 'error': {
      return 'picto-text-error';
    }
    case 'success': {
      return 'picto-text-success';
    }
    case 'info': {
      return 'picto-text-info';
    }
    case 'warning': {
      return 'picto-text-warning';
    }
    case 'black': {
      return 'picto-text-black';
    }
    case 'white': {
      return 'picto-text-white';
    }
    default: {
      return '';
    }
  }
}
