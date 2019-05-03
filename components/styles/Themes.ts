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

export interface Props {
  theme: {
    colors: {
      black: string;
      grey: string;
      white: string;
      red: string;
      red_transparent: string;
      grey_darker: string;
      grey_darkest: string;
    };
    sizes: {
      small: string;
      med_small: string;
      med: string;
      med_large: string;
      large: string;
    };
    max_width: string;
  };
}

export { theme };
