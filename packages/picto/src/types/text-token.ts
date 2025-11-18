// TextToken interface
import { FontWeight } from './font';
import { LetterSpacing, LineHeight } from './typography';

export interface TextToken {
  fontSize: string;
  fontWeight: FontWeight;
  lineHeight: LineHeight;
  letterSpacing: LetterSpacing;
}
