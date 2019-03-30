import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import posed from 'react-pose';
import Nav from './Nav';
import SocialLinks from '../SocialLinks';

const StyledMobileNav = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 20px;
  z-index: 2;
  background: ${props => props.theme.black};
  border-bottom: 2px solid ${props => props.theme.grey};
  position: fixed;

  @media screen and (min-width: ${props => props.theme.small}) {
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
  color: ${props => props.theme.white};
`;

const Initials = styled.span`
  color: ${props => props.theme.red};
`;

const NameRest = styled.span`
  @media screen and (max-width: 387px) {
    display: none;
  }
`;
const Dots = styled.span`
  color: ${props => props.theme.red};
  @media screen and (min-width: 387px) {
    display: none;
  }
`;

const StyledHamburger = styled.button`
  text-transform: uppercase;
  background: none;
  color: ${props => props.theme.white};
  border: 2px solid ${props => props.theme.red};
  padding: 12px;
  position: absolute;
  font-size: 1.5em;

  :focus,
  :hover {
    outline: 1px solid ${props => props.theme.white};
    background: ${props => props.theme.red};
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
  background: ${props => props.theme.black};
`;

function MobileNav() {
  const [isOpen, setOpen] = useState(false);
  const [menuText, setText] = useState('Menu');

  useEffect(() => {
    setText(isOpen ? 'Close' : 'Menu');
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
