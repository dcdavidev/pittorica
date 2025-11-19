import { styleVariants } from '@vanilla-extract/css';

import { vars } from './vars.css.js';

export const SPACING_TOKEN = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  10,
  12,
  14,
  16,
  20,
  24,
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
] as const;

export type SpacingToken = (typeof SPACING_TOKEN)[number];

/**
 * Gets the spacing value for a given spacing token.
 * @param token The spacing token, e.g. 'md' or 4.
 * @returns The corresponding spacing CSS value.
 * @example
 * ```typescript
 * getSpacing('md'); // '1rem'
 * getSpacing(4); // '1rem'
 * ```
 */
function getSpacing(token: SpacingToken): string {
  if (typeof token === 'number') {
    return vars.space[token];
  }
  return vars.space[token];
}

/**
 * Spacing utility classes for padding.
 * Generated dynamically from SPACING_TOKEN.
 */
export const padding = styleVariants(
  (() => {
    const styles: Record<string, { padding: string }> = {};
    for (const token of SPACING_TOKEN) {
      styles[token] = { padding: getSpacing(token) };
    }
    return styles as Record<SpacingToken, { padding: string }>;
  })()
);

/**
 * Spacing utility classes for margin.
 * Generated dynamically from SPACING_TOKEN.
 */
export const margin = styleVariants(
  (() => {
    const styles: Record<string, { margin: string }> = {};
    for (const token of SPACING_TOKEN) {
      styles[token] = { margin: getSpacing(token) };
    }
    return styles as Record<SpacingToken, { margin: string }>;
  })()
);

/**
 * Spacing utility classes for gap.
 * Generated dynamically from SPACING_TOKEN.
 */
export const gap = styleVariants(
  (() => {
    const styles: Record<string, { gap: string }> = {};
    for (const token of SPACING_TOKEN) {
      styles[token] = { gap: getSpacing(token) };
    }
    return styles as Record<SpacingToken, { gap: string }>;
  })()
);

/**
 * Spacing utility classes for margin-top.
 * Generated dynamically from SPACING_TOKEN.
 */
export const marginTop = styleVariants(
  (() => {
    const styles: Record<string, { marginTop: string }> = {};
    for (const token of SPACING_TOKEN) {
      styles[token] = { marginTop: getSpacing(token) };
    }
    return styles as Record<SpacingToken, { marginTop: string }>;
  })()
);

/**
 * Spacing utility classes for margin-bottom.
 * Generated dynamically from SPACING_TOKEN.
 */
export const marginBottom = styleVariants(
  (() => {
    const styles: Record<string, { marginBottom: string }> = {};
    for (const token of SPACING_TOKEN) {
      styles[token] = { marginBottom: getSpacing(token) };
    }
    return styles as Record<SpacingToken, { marginBottom: string }>;
  })()
);

/**
 * Spacing utility classes for margin-left.
 * Generated dynamically from SPACING_TOKEN.
 */
export const marginLeft = styleVariants(
  (() => {
    const styles: Record<string, { marginLeft: string }> = {};
    for (const token of SPACING_TOKEN) {
      styles[token] = { marginLeft: getSpacing(token) };
    }
    return styles as Record<SpacingToken, { marginLeft: string }>;
  })()
);

/**
 * Spacing utility classes for margin-right.
 * Generated dynamically from SPACING_TOKEN.
 */
export const marginRight = styleVariants(
  (() => {
    const styles: Record<string, { marginRight: string }> = {};
    for (const token of SPACING_TOKEN) {
      styles[token] = { marginRight: getSpacing(token) };
    }
    return styles as Record<SpacingToken, { marginRight: string }>;
  })()
);

/**
 * Spacing utility classes for padding-top.
 * Generated dynamically from SPACING_TOKEN.
 */
export const paddingTop = styleVariants(
  (() => {
    const styles: Record<string, { paddingTop: string }> = {};
    for (const token of SPACING_TOKEN) {
      styles[token] = { paddingTop: getSpacing(token) };
    }
    return styles as Record<SpacingToken, { paddingTop: string }>;
  })()
);

/**
 * Spacing utility classes for padding-bottom.
 * Generated dynamically from SPACING_TOKEN.
 */
export const paddingBottom = styleVariants(
  (() => {
    const styles: Record<string, { paddingBottom: string }> = {};
    for (const token of SPACING_TOKEN) {
      styles[token] = { paddingBottom: getSpacing(token) };
    }
    return styles as Record<SpacingToken, { paddingBottom: string }>;
  })()
);

/**
 * Spacing utility classes for padding-left.
 * Generated dynamically from SPACING_TOKEN.
 */
export const paddingLeft = styleVariants(
  (() => {
    const styles: Record<string, { paddingLeft: string }> = {};
    for (const token of SPACING_TOKEN) {
      styles[token] = { paddingLeft: getSpacing(token) };
    }
    return styles as Record<SpacingToken, { paddingLeft: string }>;
  })()
);

/**
 * Spacing utility classes for padding-right.
 * Generated dynamically from SPACING_TOKEN.
 */
export const paddingRight = styleVariants(
  (() => {
    const styles: Record<string, { paddingRight: string }> = {};
    for (const token of SPACING_TOKEN) {
      styles[token] = { paddingRight: getSpacing(token) };
    }
    return styles as Record<SpacingToken, { paddingRight: string }>;
  })()
);
