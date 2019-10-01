import NProgress from 'nprogress';
import React, { SFC } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import posed from 'react-pose';
import { Props } from '../../styles/Themes';
import { Paper } from '../Paper';

Router.events.on(`routeChangeStart`, () => {
  NProgress.configure({ showSpinner: false });
  NProgress.start();
});
Router.events.on(`routeChangeComplete`, () => {
  NProgress.done();
});

Router.events.on(`routeChangeError`, () => {
  NProgress.done();
});

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
  position: relative;
  color: var(--text-color-light);
  padding: 30px;
  margin-top: 76px;
  min-height: 250px;

  @media (min-width: ${(props: Props) => props.theme.sizes.small}) {
    margin-top: 0;
  }
`;

const StyledHeaderTitle = styled.h1`
  margin: 0;
  font-size: 3rem;
  font-weight: 300;
  text-transform: uppercase;
  text-indent: 20px;

  @media (min-width: ${(props: Props) => props.theme.sizes.med_small}) {
    font-size: 5rem;
  }
`;

const StyledHeaderDescription = styled.p`
  font-size: 2rem;
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
    <Paper translate="-90%" />
  </StyledHeader>
);

export default Header;
