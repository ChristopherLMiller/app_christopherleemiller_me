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
  enter: {
    transform: `rotateX(0deg)`,
  },
  exit: {
    transform: `rotateX(90deg)`,
  },
});

const StyledHeader = styled(HeaderPopped)`
  background: ${(props: Props) => props.theme.colors.red_transparent};
  padding: 30px;
  transform: rotateX(90deg);
  transition: all 0.25s;
  transition-delay: 0.5s;
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
  <StyledHeader initialPose="exit" pose="enter">
    <StyledHeaderTitle>{title}</StyledHeaderTitle>
    <StyledHeaderDescription>{description}</StyledHeaderDescription>
  </StyledHeader>
);

export default Header;
