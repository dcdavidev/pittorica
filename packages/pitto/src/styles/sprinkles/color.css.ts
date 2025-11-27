import { defineProperties } from '@vanilla-extract/sprinkles';

import { pitto } from '../contract.css.js';

type ColorKeys = keyof typeof pitto.color;
type LevelKeys = keyof typeof pitto.color.black;
type ColorTypeKeys = keyof (typeof pitto.color.black)['0'];

const generateColorMap = () => {
  const colorMap: Record<string, string> = {};
  const colorContract = pitto.color;

  colorMap['transparent'] = colorContract.transparent;

  for (const baseKey of Object.keys(colorContract) as ColorKeys[]) {
    if (baseKey === 'transparent') continue;

    const colorScale = colorContract[baseKey];

    for (const levelKey of Object.keys(colorScale)) {
      const typedLevelKey = levelKey as unknown as LevelKeys;
      const levelTokens = colorScale[typedLevelKey];

      for (const typeKey of Object.keys(levelTokens) as ColorTypeKeys[]) {
        const flatKey = `${baseKey}${typedLevelKey}${typeKey.charAt(0).toUpperCase() + typeKey.slice(1)}`;

        colorMap[flatKey] = levelTokens[typeKey];
      }
    }
  }
  return colorMap;
};

const flatColorMap = generateColorMap();

export const colorProperties = defineProperties({
  properties: {
    backgroundColor: flatColorMap,
    color: flatColorMap,
  },
  shorthands: {
    bg: ['backgroundColor'],
    c: ['color'],
  },
});

export type ColorProperties = typeof colorProperties;
