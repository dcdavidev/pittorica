// Spacing tokens
export const SPACING_TOKEN = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

export type SpacingToken = (typeof SPACING_TOKEN)[number];
