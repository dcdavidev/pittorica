import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { pitto } from './contract.css';

const spacingProperties = defineProperties({
  properties: {
    padding: pitto.spacing,
    margin: pitto.spacing,
    gap: pitto.spacing,

    paddingTop: pitto.spacing,
    paddingBottom: pitto.spacing,
    paddingLeft: pitto.spacing,
    paddingRight: pitto.spacing,

    paddingX: pitto.spacing,
    paddingY: pitto.spacing,

    marginTop: pitto.spacing,
    marginBottom: pitto.spacing,
    marginLeft: pitto.spacing,
    marginRight: pitto.spacing,

    marginX: pitto.spacing,
    marginY: pitto.spacing,

    columnGap: pitto.spacing,
    rowGap: pitto.spacing,
  },
});

export const sprinkles = createSprinkles(spacingProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
