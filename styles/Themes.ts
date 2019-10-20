import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    black: `#000000`,
    grey: `#E9E9E9`,
    white: `#FFFFFF`,
    red: `#712020`,
    red_opposite: `#C20000`,
    red_transparent: `rgba(152, 41, 41, 0.7)`,
    grey_darker: `#a6a6a6`,
    grey_intermediate: `#6B6B6B`,
    grey_darkest: `#303030`,
  },
  sizes: {
    small: `700px`,
    med_small: `900px`,
    med: `1000px`,
    med_large: `1100px`,
    large: `1200px`,
    extra_large: `1300px`,
    super_large: `1600px`,
  },
  max_width: `1000px`,
};

export interface Props {
  theme: {
    colors: {
      black: string;
      grey: string;
      grey_darker: string;
      grey_darkest: string;
      grey_intermediate: string;
      red: string;
      red_opposite: string;
      red_transparent: string;
      white: string;
    };
    sizes: {
      small: string;
      large: string;
      extra_large: string;
      med: string;
      med_large: string;
      med_small: string;
      super_large: string;
    };
    max_width: string;
  };
}

export const GlobalStyles = createGlobalStyle`
  :root {
    --text-color: ${theme.colors.black};
    --background-white: ${theme.colors.white};
    --background-light: ${theme.colors.grey};
    --background-dark: ${theme.colors.grey_darker};
    --background-intermediate: ${theme.colors.grey_intermediate};
    --background-darker: ${theme.colors.grey_darkest};
    --main-color: ${theme.colors.red};
    --main-color-opposite: ${theme.colors.red_opposite};
    --main-color-transparent: ${theme.colors.red_transparent};
    --text-color-light: ${theme.colors.white};
    --font-main: Roboto, sans-serif;
    --font-monospace: monospace;
    --font-marker: 'Permanent Marker';
    --font-alt: Oswald, sans-serif;
    --title-margin: 0;
    --title-padding: 20px;
    --title-font-size: 2.25rem;
    --title-letter-spacing: 3px;
    --box-shadow: 0px 0px 22px rgba(0,0,0,0.4),0px 0px 4px rgba(0,0,0,0.25);
    --font-size-responsive: calc(2rem + ((1vw - 0.5em) * 0.4));
  }

  html {
    font-size: 10px;
    min-height: 100vh;
  }
  *, *:before, *:after {
    box-sizing: border-box;
  }
  body {
    font-family: var(--font-main);
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 1.25;
    min-height: 100vh;
  }

  a {
    text-decoration: none;
    color: var(--text-color-light);
  }
`;
