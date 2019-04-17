import Link from 'next/link';
import Nav from './Nav';
import posed from 'react-pose';
import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import SocialLinks from '../SocialLinks';
import styled from 'styled-components';
import { Props } from '../styles/Themes';


const StyledMobileNav = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 20px;
  z-index: 2;
  background: ${(props: Props) => props.theme.colors.black};
  border-bottom: 2px solid ${(props: Props) => props.theme.colors.grey};
  position: fixed;

  @media screen and (min-width: ${(props: Props) => props.theme.sizes.small}) {
    display: none;
  }
`;

const StyledMobileNavWrapper = styled.div`
  position: relative;
`;

const StyledTitle = styled.h2`
  text-align: right;
  font-size: 2em;
  margin: 0;
  padding: 0;
  vertical-align: top;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledDescription = styled.h3`
  margin: 0;
  text-align: right;
  color: ${(props: Props) => props.theme.colors.white};
`;

const Initials = styled.span`
  color: ${(props: Props) => props.theme.colors.red};
`;

const NameRest = styled.span`
  @media screen and (max-width: 387px) {
    display: none;
  }
`;
const Dots = styled.span`
  color: ${(props: Props) => props.theme.colors.red};
  @media screen and (min-width: 387px) {
    display: none;
  }
`;

const StyledHamburger = styled.button`
  text-transform: uppercase;
  background: none;
  color: ${(props: Props) => props.theme.colors.white};
  border: 2px solid ${(props: Props) => props.theme.colors.red};
  padding: 12px;
  position: absolute;
  font-size: 1.5em;
  width: 110px;

  :focus,
  :hover {
    outline: 1px solid ${(props: Props) => props.theme.colors.white};
    background: ${(props: Props) => props.theme.colors.red};
  }
`;

const Navigation = posed.div({
  closed: {
    transform: 'rotateX(-90deg)',
    height: '0vh',
    opacity: 0,
  },
  open: {
    height: 'calc(100vh - 75px)',
    transform: 'rotateX(0deg)',
    opacity: 1,
    marginTop: '1px',
  },
});

const StyledNavigationWrapper = styled(Navigation)`
  transition: all 0.5s;
  transform: rotateX(-90deg);
  height: 0vh;
  opacity: 0;
  transform-origin: top;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${(props: Props) => props.theme.colors.black};
`;

const MobileNav = () => {
  const [isOpen, setOpen] = useState(false);
  const [menuText, setText] = useState('Menu');

  useEffect(() => {
    function handleRouteChange() {
      setOpen(false);
    }
    Router.events.on('routeChangeStart', handleRouteChange);

    setText(isOpen ? 'Close' : 'Menu');

    return function cleanup() {
      Router.events.off('routeChangeStart', handleRouteChange);
    };
  });

  return (
    <StyledMobileNav>
      <StyledMobileNavWrapper>
        <StyledHamburger onClick={() => setOpen(!isOpen)}>
          {menuText}
        </StyledHamburger>
        <Link href="/">
          <a>
            <StyledTitle>
              <Initials>C</Initials>
              <NameRest>hristopher </NameRest>
              <Initials>L</Initials>
              <NameRest>ee </NameRest>
              <Initials>M</Initials>
              <NameRest>iller</NameRest>
              <Dots>.Me</Dots>
            </StyledTitle>
          </a>
        </Link>
        <StyledDescription>All About Me!</StyledDescription>
      </StyledMobileNavWrapper>
      <StyledNavigationWrapper pose={isOpen ? 'open' : 'closed'}>
        <Nav />
        <SocialLinks />
      </StyledNavigationWrapper>
    </StyledMobileNav>
  );
}
export default MobileNav;
