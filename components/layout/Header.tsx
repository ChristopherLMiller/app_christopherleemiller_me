import NProgress from 'nprogress';
import React, { SFC } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import { Props } from '../styles/Themes';

Router.onRouteChangeStart = () => {
  NProgress.configure({ showSpinner: false });
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const StyledHeader = styled.header`
  background: ${(props: Props) => props.theme.colors.red_transparent};
  padding: 30px;
`;

const StyledHeaderTitle = styled.h1`
  margin: 0;
  font-size: 2.5em;
`;

const StyledHeaderDescription = styled.p`
  font-size: 1.25em;
`;

interface HeaderProps {
  title: string,
  description: string,
}
const Header: SFC<HeaderProps> = ({ title, description }) => (
  <StyledHeader>
    <StyledHeaderTitle>{title}</StyledHeaderTitle>
    <StyledHeaderDescription>
      {description}
    </StyledHeaderDescription>
  </StyledHeader>
);

export default Header;
