// BaseStyle and RootStyle interfaces
import { ColorKey } from './colors';
import { FontStack } from './font';

export interface BaseStyle {
  fontFamily: FontStack;
  fontSize: string;
  color: ColorKey;
}

export interface RootStyle extends BaseStyle {
  background: ColorKey;
}
