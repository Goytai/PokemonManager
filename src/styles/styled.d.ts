import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    font: {
      family: string;
      colors: {
        [key: number]: string[];
      };
    };

    colors: {
      [key: number]: string[];
    };
  }
}
