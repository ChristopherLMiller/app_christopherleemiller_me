import NProgress from 'nprogress';
import { SFC } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import { Props } from '../../styles/Themes';

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

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  color: var(--text-color-light);
  padding: 30px;
  margin-top: 76px;
  min-height: 215px;

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
  <StyledHeader>
    <StyledHeaderDescription>{description}</StyledHeaderDescription>
    <StyledHeaderTitle>{title}</StyledHeaderTitle>
  </StyledHeader>
);

export default Header;
