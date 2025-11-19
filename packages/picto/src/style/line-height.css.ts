export const LINE_HEIGHT_TOKEN = ['tight', 'normal', 'relaxed'] as const;

export type LineHeightToken = (typeof LINE_HEIGHT_TOKEN)[number];
