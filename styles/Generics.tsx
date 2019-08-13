import styled from 'styled-components';
import { Props } from '../styles/Themes';

export const Center = styled.div`
  margin: 0 auto;
  text-align: center;
`;

export const Main = styled.main`
  padding: 20px;
  overflow-x: hidden;
  flex-grow: 2;

  @media (min-width: ${(props: Props) => props.theme.sizes.med_small}) {
    padding: 25px;
  }

  @media (min-width: ${(props: Props) => props.theme.sizes.med}) {
    padding: 30px;
  }

  @media (min-width: ${(props: Props) => props.theme.sizes.med_large}) {
    padding: 35px;
  }

  @media (min-width: ${(props: Props) => props.theme.sizes.large}) {
    padding: 40px;
  }
`;
