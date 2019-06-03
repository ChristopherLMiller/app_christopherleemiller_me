import Link from 'next/link';
import posed from 'react-pose';
import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import Nav from './Nav';
import { Props } from '../styles/Themes';
import { SocialLinks } from '../SocialLinks';

const StyledMobileNav = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 20px;
  background: var(--main-color-black);
  border-bottom: 2px solid var(--main-color-grey);
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
  font-family: Oswald, sans-serif;
  font-variant: petite-caps;
`;

const StyledDescription = styled.h3`
  margin: 0;
  text-align: right;
  color: var(--main-color-white);
`;

const Initials = styled.span`
  color: var(--main-color-red);
`;

const NameRest = styled.span`
  @media screen and (max-width: 387px) {
    display: none;
  }
`;
const Dots = styled.span`
  color: var(--main-color-red);
  @media screen and (min-width: 387px) {
    display: none;
  }
`;

const StyledHamburger = styled.button`
  text-transform: uppercase;
  background: none;
  color: var(--main-color-white);
  border: 2px solid var(--main-color-red);
  padding: 12px;
  position: absolute;
  font-size: 1.5em;
  width: 110px;

  :focus,
  :hover {
    outline: 1px solid var(--main-color-white);
    background: var(--main-color-red);
  }
`;

const Navigation = posed.div({
  closed: {
    height: `0vh`,
    opacity: 0,
    transform: `rotateX(-90deg)`,
  },
  open: {
    height: `calc(100vh - 75px)`,
    marginTop: `1px`,
    opacity: 1,
    transform: `rotateX(0deg)`,
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
  background: var(--main-color-black);
`;

const MobileNav = () => {
  const [isOpen, setOpen] = useState(false);
  const [menuText, setText] = useState(`Menu`);

  useEffect(() => {
    function handleRouteChange() {
      setOpen(false);
    }
    Router.events.on(`routeChangeStart`, handleRouteChange);

    setText(isOpen ? `Close` : `Menu`);

    return function cleanup() {
      Router.events.off(`routeChangeStart`, handleRouteChange);
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
      <StyledNavigationWrapper pose={isOpen ? `open` : `closed`}>
        <Nav />
        <SocialLinks />
      </StyledNavigationWrapper>
    </StyledMobileNav>
  );
};
export default MobileNav;
