export const TYPESCALE_TOKEN = [
  'display-lg',
  'display-md',
  'display-sm',
  'headline-lg',
  'headline-md',
  'headline-sm',
  'title-lg',
  'title-md',
  'title-sm',
  'label-lg',
  'label-md',
  'label-sm',
  'body-lg',
  'body-md',
  'body-sm',
] as const;
export type TypescaleToken = (typeof TYPESCALE_TOKEN)[number];
