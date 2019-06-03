import React, { Fragment, SFC } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import posed from 'react-pose';
import Meta from './Meta';
import Sidebar from './Sidebar';
import MobileNav from './MobileNav';
import { theme, Props } from '../styles/Themes';

const StyledPage = styled.div`
  color: var(--main-color-white);
  transition: all 0.5s;

  @media screen and (min-width: ${(props: Props) => props.theme.sizes.small}) {
    display: grid;
    grid-template-columns: 300px 1fr;
  }
  @media screen and (min-width: ${(props: Props) =>
      props.theme.sizes.med_small}) {
    grid-template-columns: 350px 1fr;
  }
  @media screen and (min-width: ${(props: Props) => props.theme.sizes.med}) {
    grid-template-columns: 350px 1fr;
  }
  @media screen and (min-width: ${(props: Props) =>
      props.theme.sizes.med_large}) {
    grid-template-columns: 400px 1fr;
  }
  @media screen and (min-width: ${(props: Props) => props.theme.sizes.large}) {
    grid-template-columns: 450px 1fr;
  }
`;

const PosedInner = posed.div({
  open: {
    beforeChildren: true,
    delayChildren: 500,
  },
});

const Inner = styled(PosedInner)`
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

const GlobalStyles = createGlobalStyle`
  :root {
    --text-color: ${(props: Props) => props.theme.colors.black};
    --background-light: ${(props: Props) => props.theme.colors.grey};
    --background-dark: ${(props: Props) => props.theme.colors.grey_darker};
    --background-darker: ${(props: Props) => props.theme.colors.grey_darkest};
    --main-color: ${(props: Props) => props.theme.colors.red};
    --main-color-transparent: ${(props: Props) =>
      props.theme.colors.red_transparent};
    --text-color-light: ${(props: Props) => props.theme.colors.white};
  }

  html {
    font-size: 10px;
    min-height: 100vh;
  }
  *, *:before, *:after {
    box-sizing: border-box;
  }
  body {
    font-family: Roboto, sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 1.15;
    background: url("https://res.cloudinary.com/christopherleemiller/image/upload/v1544460951/clm_me/assets/background.jpg") no-repeat center;
    background-attachment: fixed;
    background-size: cover;
    min-height: 100vh;
  }

  a {
    text-decoration: none;
    color: var(--text-color-light);
  }
`;

interface PageProps {
  children: object;
  router: {
    route: any;
  };
}

const Page: SFC<PageProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <StyledPage>
        <Meta />
        <Sidebar />
        <Inner pose="open">{children}</Inner>
      </StyledPage>
      <MobileNav />
      <GlobalStyles />
    </Fragment>
  </ThemeProvider>
);

export default Page;
