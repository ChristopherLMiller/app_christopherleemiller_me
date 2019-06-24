import React, { Fragment, SFC } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import posed from 'react-pose';
import Meta from './Meta';
import Sidebar from './Sidebar';
import MobileNav from './MobileNav';
import { theme, Props, GlobalStyles } from '../../styles/Themes';

const StyledPage = styled.div`
  color: var(--text-color-light);
  transition: all 0.5s;

  :before {
    content: '';
    position: fixed;
    transform: scale(1.1);
    left: 0;
    right: 0;
    z-index: -1;

    display: block;
    background-image: url('https://res.cloudinary.com/christopherleemiller/image/upload/v1544460951/clm_me/assets/background.jpg');
    background-size: cover;
    width: 100%;
    height: 100%;

    filter: blur(4px);
  }

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
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
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
