import NProgress from 'nprogress';
import React, { SFC } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import posed from 'react-pose';
import { Props } from '../styles/Themes';
import { Paper } from '../Paper';

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
  color: var(--text-color-light);
  padding: 30px;
  margin-top: 76px;
  min-height: 220px;

  @media (min-width: ${(props: Props) => props.theme.sizes.small}) {
    margin-top: 25px;
  }
`;

const StyledHeaderTitle = styled.h1`
  margin: 0;
  font-size: 2.5em;
  font-weight: 300;
  text-transform: uppercase;
  text-indent: 20px;
`;

const StyledHeaderDescription = styled.p`
  font-size: 1.25em;
  font-weight: 100;
  margin: 0;
  margin-bottom: 5px;
`;

interface HeaderProps {
  title: string;
  description: string;
}
const Header: SFC<HeaderProps> = ({ title, description }) => (
  <StyledHeader pose="open" initialPose="closed">
    <StyledHeaderDescription>{description}</StyledHeaderDescription>
    <StyledHeaderTitle>{title}</StyledHeaderTitle>
    <Paper />
  </StyledHeader>
);

export default Header;
