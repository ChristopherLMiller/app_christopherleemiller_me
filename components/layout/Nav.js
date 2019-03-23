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
`;
const Nav = () => (
  <NavStyles>
    <NavItem>
      <Link href="/" prefetch>
        <a>Home</a>
      </Link>
    </NavItem>

    <NavItem>
      <Link href="/archives" prefetch>
        <a>Archives</a>
      </Link>
    </NavItem>

    <NavItem>
      <Link href="/about" prefetch>
        <a>About</a>
      </Link>
    </NavItem>

    <NavItem>
      <Link href="/services" prefetch>
        <a>Services</a>
      </Link>
    </NavItem>

    <NavItem>
      <Link href="/gallery" prefetch>
        <a>Gallery</a>
      </Link>
    </NavItem>

    <NavItem>
      <Link href="/contact-me" prefetch>
        <a>Contact Me</a>
      </Link>
    </NavItem>

    <NavItem>
      <Link href="/signin" prefetch>
        <a>Sign In</a>
      </Link>
    </NavItem>
  </NavStyles>
);

export default Nav;
