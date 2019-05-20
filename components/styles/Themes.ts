import styled from 'styled-components';

const theme = {
  colors: {
    black: `#000000`,
    grey: `#E9E9E9`,
    white: `#FFFFFF`,
    red: `#982929`,
    red_transparent: `rgba(152, 41, 41, 0.7)`,
    grey_darker: `#a6a6a6`,
    grey_darkest: `#303030`,
  },
  sizes: {
    small: `700px`,
    med_small: `900px`,
    med: `1000px`,
    med_large: `1100px`,
    large: `1200px`,
  },
  max_width: `1000px`,
};

const Center = styled.div`
  margin: 0 auto;
`;

export interface Props {
  theme: {
    colors: {
      black: string;
      grey: string;
      grey_darker: string;
      grey_darkest: string;
      red: string;
      red_transparent: string;
      white: string;
    };
    sizes: {
      small: string;
      large: string;
      med: string;
      med_large: string;
      med_small: string;
    };
    max_width: string;
  };
}

export { theme, Center };
