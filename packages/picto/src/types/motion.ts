export const MOTION_DURATION_SCALE = [
  'instant',
  'fast',
  'normal',
  'slow',
  'slower',
  'short-1',
  'short-2',
  'short-3',
  'short-4',
  'medium-1',
  'medium-2',
  'medium-3',
  'medium-4',
  'long-1',
  'long-2',
  'long-3',
  'long-4',
  'extra-long-1',
  'extra-long-2',
  'extra-long-3',
  'extra-long-4',
] as const;

export type MotionDurationScale = (typeof MOTION_DURATION_SCALE)[number];

export const MOTION_EASING_SCALE = [
  'linear',
  'standard',
  'emphasized',
  'emphasized-decelerate',
  'emphasized-accelerate',
  'legacy',
  'legacy-decelerate',
  'legacy-accelerate',
] as const;

export type MotionEasingScale = (typeof MOTION_EASING_SCALE)[number];

export const MOTION_TRANSITION_SEMANTIC = ['fast', 'normal', 'slow'] as const;

export type MotionTransitionSemantic =
  (typeof MOTION_TRANSITION_SEMANTIC)[number];
