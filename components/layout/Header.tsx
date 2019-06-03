import NProgress from 'nprogress';
import React, { SFC } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import posed from 'react-pose';
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

const HeaderPopped = posed.header({
  open: {
    y: `0%`,
    delay: 500,
  },
  closed: {
    y: `-120%`,
  },
});

const StyledHeader = styled(HeaderPopped)`
  background: var(--main-color);
  color: var(--text-color-light);
  padding: 30px;
  margin-top: 76px;

  @media screen and (min-width: ${(props: Props) => props.theme.sizes.small}) {
    margin-top: 25px;
  }
`;

const StyledHeaderTitle = styled.h1`
  margin: 0;
  font-size: 2.5em;
  font-weight: 300;
  text-transform: uppercase;
`;

const StyledHeaderDescription = styled.p`
  font-size: 1.25em;
  font-weight: 100;
  margin-top: 5px;
`;

interface HeaderProps {
  title: string;
  description: string;
}
const Header: SFC<HeaderProps> = ({ title, description }) => (
  <StyledHeader pose="open" initialPose="closed">
    <StyledHeaderTitle>{title}</StyledHeaderTitle>
    <StyledHeaderDescription>{description}</StyledHeaderDescription>
  </StyledHeader>
);

export default Header;
