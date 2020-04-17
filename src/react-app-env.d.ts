import { theme } from "./res";

type ThemeInterface = typeof theme;

declare module "styled-components" {
  interface DefaultTheme extends ThemeInterface {}
}

/// <reference types="react-scripts" />
