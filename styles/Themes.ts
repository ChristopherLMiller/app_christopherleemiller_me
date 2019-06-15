import styled from 'styled-components';

const theme = {
  colors: {
    black: `#000000`,
    grey: `#E9E9E9`,
    white: `#FFFFFF`,
    red: `#982929`,
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

const Center = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const Main = styled.main`
  padding: 20px;
  overflow-x: hidden;
  flex-grow: 2;

  @media screen and (min-width: ${(props: Props) =>
      props.theme.sizes.med_small}) {
    padding: 25px;
  }

  @media screen and (min-width: ${(props: Props) => props.theme.sizes.med}) {
    padding: 30px;
  }

  @media screen and (min-width: ${(props: Props) =>
      props.theme.sizes.med_large}) {
    padding: 35px;
  }

  @media screen and (min-width: ${(props: Props) => props.theme.sizes.large}) {
    padding: 40px;
  }
`;

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

export { Center, Main, theme };
