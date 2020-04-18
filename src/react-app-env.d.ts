import { theme } from "./res";

type ThemeInterface = typeof theme;

declare module "styled-components" {
  interface DefaultTheme extends ThemeInterface {}
}

declare module '*.jpg';
declare module '*.png';

/// <reference types="react-scripts" />
