import Link from 'next/link';
import posed from 'react-pose';
import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import Nav from './Nav';
import { Props } from '../../styles/Themes';
import { SocialLinks } from '../SocialLinks';

const StyledMobileNav = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  background: var(--text-color);
  border-bottom: 2px solid var(--background-light);
  position: fixed;
  z-index: 9999;

  @media (min-width: ${(props: Props) => props.theme.sizes.small}) {
    display: none;
  }
`;

const StyledMobileNavWrapper = styled.div`
  position: relative;
  padding: 10px 20px;
`;

const StyledTitle = styled.h2`
  text-align: right;
  font-size: 2.75rem;
  margin: 0;
  padding: 0;
  vertical-align: top;
  &:hover {
    text-decoration: underline;
  }
  font-family: var(--font-alt);
  font-variant: petite-caps;
`;

const StyledDescription = styled.h3`
  margin: 0;
  text-align: right;
  color: var(--text-color-light);
`;

const Initials = styled.span`
  color: var(--main-color);
`;

const NameRest = styled.span`
  @media (max-width: 387px) {
    display: none;
  }
`;
const Dots = styled.span`
  color: var(--main-color);
  @media (min-width: 387px) {
    display: none;
  }
`;

const StyledHamburger = styled.button`
  text-transform: uppercase;
  background: none;
  color: var(--text-color-light);
  border: 2px solid var(--main-color);
  padding: 12px;
  position: absolute;
  font-size: 2rem;
  width: 110px;

  :focus,
  :hover {
    outline: 1px solid var(--text-color-light);
    background: var(--main-color);
  }

  @media print {
    display: none;
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
  overflow-y: auto;
  transform: rotateX(-90deg);
  height: 0vh;
  opacity: 0;
  padding: 0 20px;
  transform-origin: top;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--text-color);
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
