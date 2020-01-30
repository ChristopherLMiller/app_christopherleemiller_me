import styled from 'styled-components';
import { Props } from '../styles/Themes';

export const Center = styled.div`
  margin: 0 auto;
  text-align: center;
`;

export const Main = styled.main`
  overflow-x: hidden;
  flex-grow: 2;
  position: relative;
  overflow-y: hidden;
  padding: 175px 20px;

  :before,
  :after {
    content: '\\A';
    left: 0;
    width: 100%;
    min-height: 200px;
    position: absolute;
    background: var(--main-color-transparent);
    transition: 0.25s;
  }

  :before {
    top: 0;
    transform: skewY(-5deg) translateY(-40%);
  }

  :after {
    bottom: 0;
    transform: skewY(-5deg) translateY(40%);
  }

  @media (min-width: ${(props: Props) => props.theme.sizes.med_small}) {
    padding: 175px 25px;
  }

  @media (min-width: ${(props: Props) => props.theme.sizes.med}) {
    padding: 175px 30px;
  }

  @media (min-width: ${(props: Props) => props.theme.sizes.med_large}) {
    padding: 200px 35px;
  }

  @media (min-width: ${(props: Props) => props.theme.sizes.large}) {
    padding: 200px 40px;
  }
`;
