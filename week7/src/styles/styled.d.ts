import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      lightPink: string;
      lightPurple: string;
      purple: string;
      lightYellow: string;
      yellow: string;
      darkPink: string;
      pink: string;
      mint: string;
      salmon: string;
      lightGreen: string;
      green: string;
      darkGreen: string;
      lightPink_modal: string;
      darkPink_modal: string;
    };
    fonts: {
      fontFamily: string;
    };
  }
}
