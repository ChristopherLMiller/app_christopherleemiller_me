import React, { Component, SFC } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { withRouter } from 'next/router';
import posed, { PoseGroup } from 'react-pose';
import Meta from './Meta';
import Sidebar from './Sidebar';
import MobileNav from './MobileNav';

import { theme, Props } from '../styles/Themes';

const StyledPage = styled.div`
  color: ${(props: Props) => props.theme.colors.white};
  transition: all 0.5s;

  @media screen and (min-width: ${(props: Props) => props.theme.sizes.small}) {
    display: grid;
    grid-template-columns: 300px 1fr;
  }
  @media screen and (min-width: ${(props: Props) => props.theme.sizes.med_small}) {
    grid-template-columns: 350px 1fr;
  }
  @media screen and (min-width: ${(props: Props) => props.theme.sizes.med}) {
    grid-template-columns: 350px 1fr;
  }
  @media screen and (min-width: ${(props: Props) => props.theme.sizes.med_large}) {
    grid-template-columns: 400px 1fr;
  }
  @media screen and (min-width: ${(props: Props) => props.theme.sizes.large}) {
    grid-template-columns: 450px 1fr;
  }
`;

const posedInner = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 },
});

const Inner = styled(posedInner)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 76px;

  @media screen and (min-width: ${(props: Props) => props.theme.sizes.small}) {
    padding-top: 0;
  }
`;

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 10px;
    min-height: 100vh;
  }
  *, *:before, *:after {
    box-sizing: border-box;
  }
  body {
    font-family: 'Oswald', sans-serif;
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
    color: ${(props: Props) => props.theme.colors.white};
  }

  main {
    flex-grow: 2;
    padding: 20px;

    @media screen and (min-width: ${(props: Props) => props.theme.sizes.small}) {
      padding: 30px;
    }
  }
`;

interface PageProps {
  children: object,
  router: {
    route: any
  },
}

const Page: SFC<PageProps> = ({ children, router }) => (
  <ThemeProvider theme={theme}>
    <>
      <StyledPage>
        <Meta />
        <Sidebar />
        <PoseGroup>
          <Inner key={router.route}>{children}</Inner>
        </PoseGroup>
      </StyledPage>
      <MobileNav />
      <GlobalStyles />
    </>
  </ThemeProvider>
);

export default withRouter(Page);
