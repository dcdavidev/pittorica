import './pittorica.scss';

/**
 * Switch theme by toggling the data-theme attribute on the &lt;html> element.
 * @param theme The theme to set ('light' or 'dark').
 * @example
 * setTheme('dark');
 */
export function setTheme(theme: 'light' | 'dark'): void {
  document.documentElement.dataset.theme = theme;
}

/**
 * Get the value of a CSS custom property (token).
 * @param name CSS variable name (e.g. '--picto-primary').
 * @param el The element to read the token from (default: document.documentElement).
 * @returns The value of the CSS custom property.
 * @example
 * const primary = getToken('--picto-primary');
 */
export function getToken(
  name: string,
  el: HTMLElement = document.documentElement
): string {
  return globalThis.getComputedStyle(el).getPropertyValue(name).trim();
}

/**
 * Set the value of a CSS custom property (token).
 * @param name CSS variable name.
 * @param value Value to set.
 * @param el The element to set the token on (default: document.documentElement).
 * @example
 * setToken('--picto-primary', '#ff0000');
 */
export function setToken(
  name: string,
  value: string,
  el: HTMLElement = document.documentElement
): void {
  el.style.setProperty(name, value);
}

/**
 * Apply dynamic styles to an element (e.g. For runtime variants).
 * @param el The element to apply styles to.
 * @param styles An object of CSS property-value pairs.
 * @example
 * applyStyles(element, { '--picto-primary': '#ff0000' });
 */
export function applyStyles(
  el: HTMLElement,
  styles: Record<string, string>
): void {
  for (const [key, value] of Object.entries(styles)) {
    el.style.setProperty(key, value);
  }
}
