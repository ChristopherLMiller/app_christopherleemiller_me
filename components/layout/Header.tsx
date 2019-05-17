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
    y: `-100%`,
  },
});

const StyledHeader = styled(HeaderPopped)`
  background: ${(props: Props) => props.theme.colors.red_transparent};
  padding: 30px;
  transform: translateY(-100%);
`;

const StyledHeaderTitle = styled.h1`
  margin: 0;
  font-size: 2.5em;
`;

const StyledHeaderDescription = styled.p`
  font-size: 1.25em;
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
