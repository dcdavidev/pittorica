export const ELEVATION_TOKEN = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

export type ElevationToken = (typeof ELEVATION_TOKEN)[number];
