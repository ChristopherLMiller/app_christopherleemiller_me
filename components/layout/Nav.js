import Link from 'next/link';
import styled from 'styled-components';

const NavStyles = styled.ul`
  padding-left: 0;
`;

const NavItem = styled.li`
  font-family: monospace;
  font-size: 1.6em;
  list-style-type: none;
  line-height: 2em;
  position: relative;

  &:after {
    position: absolute;
    top: 0;
    right: 500px;
    //width: 500px;
    height: 100%;
    content: '\\A';
    background: ${props => props.theme.red};
    opacity: 0.7;
    z-index: -1;
    transition: all 0.5s;
  }
  &:hover:after {
    right: 0;
  }
`;
const Nav = () => (
  <NavStyles>
    <NavItem>
      <Link href="/">
        <a>Home</a>
      </Link>
    </NavItem>

    <NavItem>
      <Link href="/archives">
        <a>Archives</a>
      </Link>
    </NavItem>

    <NavItem>
      <Link href="/about">
        <a>About</a>
      </Link>
    </NavItem>

    <NavItem>
      <Link href="/services">
        <a>Services</a>
      </Link>
    </NavItem>

    <NavItem>
      <Link href="/gallery">
        <a>Gallery</a>
      </Link>
    </NavItem>

    <NavItem>
      <Link href="/contact-me">
        <a>Contact Me</a>
      </Link>
    </NavItem>

    <NavItem>
      <Link href="/signin">
        <a>Sign In</a>
      </Link>
    </NavItem>
  </NavStyles>
);

export default Nav;
