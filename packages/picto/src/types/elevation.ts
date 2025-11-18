export const ELEVATION_TOKEN = ['none', 'sm', 'md', 'lg', 'xl', '2xl'] as const;

export type ElevationToken = (typeof ELEVATION_TOKEN)[number];
