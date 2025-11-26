import { pitto } from './contract.css.js';

export type ElevationPin = keyof typeof pitto.surface;
export const ELEVATION_PINS = Object.keys(pitto.surface).map(
  (key) => key as unknown as ElevationPin
) as ReadonlyArray<ElevationPin>;
