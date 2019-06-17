import styled from 'styled-components';
import { Props } from '../styles/Themes';

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

export { Center, Main };
