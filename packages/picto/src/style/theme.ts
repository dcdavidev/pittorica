import {
  argbFromHex,
  hexFromArgb,
  TonalPalette,
} from '@material/material-color-utilities';

export type Palette = {
  primary: string;

  secondary: string;

  tertiary: string;

  neutral: string;

  'neutral-variant': string;

  error: string;

  success: string;

  info: string;

  danger: string;
};

export const defaultPalette: Palette = {
  primary: '#08a4bd',

  secondary: '#d87cac',

  tertiary: '#67597a',

  neutral: '#787579',

  'neutral-variant': '#6a6670',

  error: '#9b2915',

  success: '#004f2d',

  info: '#08a4bd',

  danger: '#e9b44c',
};

export const createPictoTheme = (palette: Palette) => {
  const primaryTones = TonalPalette.fromInt(argbFromHex(palette.primary));

  const secondaryTones = TonalPalette.fromInt(argbFromHex(palette.secondary));

  const tertiaryTones = TonalPalette.fromInt(argbFromHex(palette.tertiary));

  const neutralTones = TonalPalette.fromInt(argbFromHex(palette.neutral));

  const neutralVariantTones = TonalPalette.fromInt(
    argbFromHex(palette['neutral-variant'])
  );

  const errorTones = TonalPalette.fromInt(argbFromHex(palette.error));

  const successTones = TonalPalette.fromInt(argbFromHex(palette.success));

  const infoTones = TonalPalette.fromInt(argbFromHex(palette.info));

  const dangerTones = TonalPalette.fromInt(argbFromHex(palette.danger));

  const lightTheme = {
    primary: hexFromArgb(primaryTones.tone(40)),

    onPrimary: hexFromArgb(primaryTones.tone(100)),

    primaryContainer: hexFromArgb(primaryTones.tone(90)),

    onPrimaryContainer: hexFromArgb(primaryTones.tone(10)),

    secondary: hexFromArgb(secondaryTones.tone(40)),

    onSecondary: hexFromArgb(secondaryTones.tone(100)),

    secondaryContainer: hexFromArgb(secondaryTones.tone(90)),

    onSecondaryContainer: hexFromArgb(secondaryTones.tone(10)),

    tertiary: hexFromArgb(tertiaryTones.tone(40)),

    onTertiary: hexFromArgb(tertiaryTones.tone(100)),

    tertiaryContainer: hexFromArgb(tertiaryTones.tone(90)),

    onTertiaryContainer: hexFromArgb(tertiaryTones.tone(10)),

    error: hexFromArgb(errorTones.tone(40)),

    onError: hexFromArgb(errorTones.tone(100)),

    errorContainer: hexFromArgb(errorTones.tone(90)),

    onErrorContainer: hexFromArgb(errorTones.tone(10)),

    success: hexFromArgb(successTones.tone(40)),

    onSuccess: hexFromArgb(successTones.tone(100)),

    successContainer: hexFromArgb(successTones.tone(90)),

    onSuccessContainer: hexFromArgb(successTones.tone(10)),

    info: hexFromArgb(infoTones.tone(40)),

    onInfo: hexFromArgb(infoTones.tone(100)),

    infoContainer: hexFromArgb(infoTones.tone(90)),

    onInfoContainer: hexFromArgb(infoTones.tone(10)),

    danger: hexFromArgb(dangerTones.tone(40)),

    onDanger: hexFromArgb(dangerTones.tone(100)),

    dangerContainer: hexFromArgb(dangerTones.tone(90)),

    onDangerContainer: hexFromArgb(dangerTones.tone(10)),

    background: hexFromArgb(neutralTones.tone(99)),

    onBackground: hexFromArgb(neutralTones.tone(10)),

    surface: hexFromArgb(neutralTones.tone(98)),

    onSurface: hexFromArgb(neutralTones.tone(10)),

    surfaceVariant: hexFromArgb(neutralVariantTones.tone(90)),

    onSurfaceVariant: hexFromArgb(neutralVariantTones.tone(30)),

    outline: hexFromArgb(neutralVariantTones.tone(50)),

    shadow: hexFromArgb(neutralTones.tone(0)),

    inverseSurface: hexFromArgb(neutralTones.tone(20)),

    inverseOnSurface: hexFromArgb(neutralTones.tone(95)),

    inversePrimary: hexFromArgb(primaryTones.tone(80)),
  };

  const darkTheme = {
    primary: hexFromArgb(primaryTones.tone(80)),

    onPrimary: hexFromArgb(primaryTones.tone(20)),

    primaryContainer: hexFromArgb(primaryTones.tone(30)),

    onPrimaryContainer: hexFromArgb(primaryTones.tone(90)),

    secondary: hexFromArgb(secondaryTones.tone(80)),

    onSecondary: hexFromArgb(secondaryTones.tone(20)),

    secondaryContainer: hexFromArgb(secondaryTones.tone(30)),

    onSecondaryContainer: hexFromArgb(secondaryTones.tone(90)),

    tertiary: hexFromArgb(tertiaryTones.tone(80)),

    onTertiary: hexFromArgb(tertiaryTones.tone(20)),

    tertiaryContainer: hexFromArgb(tertiaryTones.tone(30)),

    onTertiaryContainer: hexFromArgb(tertiaryTones.tone(90)),

    error: hexFromArgb(errorTones.tone(80)),

    onError: hexFromArgb(errorTones.tone(20)),

    errorContainer: hexFromArgb(errorTones.tone(30)),

    onErrorContainer: hexFromArgb(errorTones.tone(90)),

    success: hexFromArgb(successTones.tone(80)),

    onSuccess: hexFromArgb(successTones.tone(20)),

    successContainer: hexFromArgb(successTones.tone(30)),

    onSuccessContainer: hexFromArgb(successTones.tone(90)),

    info: hexFromArgb(infoTones.tone(80)),

    onInfo: hexFromArgb(infoTones.tone(20)),

    infoContainer: hexFromArgb(infoTones.tone(30)),

    onInfoContainer: hexFromArgb(infoTones.tone(90)),

    danger: hexFromArgb(dangerTones.tone(80)),

    onDanger: hexFromArgb(dangerTones.tone(20)),

    dangerContainer: hexFromArgb(dangerTones.tone(30)),

    onDangerContainer: hexFromArgb(dangerTones.tone(90)),

    background: hexFromArgb(neutralTones.tone(10)),

    onBackground: hexFromArgb(neutralTones.tone(90)),

    surface: hexFromArgb(neutralTones.tone(20)),

    onSurface: hexFromArgb(neutralTones.tone(90)),

    surfaceVariant: hexFromArgb(neutralVariantTones.tone(30)),

    onSurfaceVariant: hexFromArgb(neutralVariantTones.tone(80)),

    outline: hexFromArgb(neutralVariantTones.tone(60)),

    shadow: hexFromArgb(neutralTones.tone(0)),

    inverseSurface: hexFromArgb(neutralTones.tone(90)),

    inverseOnSurface: hexFromArgb(neutralTones.tone(20)),

    inversePrimary: hexFromArgb(primaryTones.tone(40)),
  };

  return { lightTheme, darkTheme };
};
