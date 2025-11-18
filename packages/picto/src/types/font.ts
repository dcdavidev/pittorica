// Font stack tokens
export const FONT_STACK = {
  sans: 'system-ui, sans-serif',
  serif: 'Georgia, serif',
  mono: 'Menlo, monospace',
};
export type FontStack = keyof typeof FONT_STACK;

// Font weight tokens
export const FONT_WEIGHT = {
  regular: 400,
  medium: 500,
  bold: 700,
};
export type FontWeight = keyof typeof FONT_WEIGHT;
