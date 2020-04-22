import { theme } from "./res";

type ThemeInterface = typeof theme;

declare module "styled-components" {
  interface DefaultTheme extends ThemeInterface {}
}

declare module '*.jpg';
declare module '*.png';
declare module "social-media-icons-react";

/// <reference types="react-scripts" />
