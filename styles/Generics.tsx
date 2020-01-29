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
  position: relative;
  overflow-y: hidden;
  padding-bottom: 175px;


  main:after {
    content: '\A';
    bottom: 0;
    left: 0;
    width: 100%;
    min-height: 200px;
    position: absolute;
    background: var(--main-color-transparent);
    transform: skewY(-5deg) translateY(100px);
  }

  @media (min-width: ${(props: Props) => props.theme.sizes.med_small}) {
    padding: 25px;
    padding-bottom: 175px;
  }

  @media (min-width: ${(props: Props) => props.theme.sizes.med}) {
    padding: 30px;
    padding-bottom: 175px;
  }

  @media (min-width: ${(props: Props) => props.theme.sizes.med_large}) {
    padding: 35px;
    padding-bottom: 200px;
  }

  @media (min-width: ${(props: Props) => props.theme.sizes.large}) {
    padding: 40px;
    padding-bottom: 200px;
  }
`;
