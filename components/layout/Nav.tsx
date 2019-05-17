import Link from 'next/link';
import styled from 'styled-components';
import posed from 'react-pose';
import { Props } from '../styles/Themes';

const PosedNav = posed.ul({
  open: {
    beforeChildren: true,
    staggerChildren: 100,
    delayChildren: 1000,
  },
});

const NavStyles = styled(PosedNav)`
  padding-left: 0;
`;

const PosedNavItem = posed.li({
  open: {
    opacity: 1,
    x: `0%`,
  },
  closed: {
    opacity: 0,
    x: `-100%`,
  },
});

const NavItem = styled(PosedNavItem)`
  font-family: monospace;
  font-size: 1.4em;
  list-style-type: none;
  line-height: 2em;

  :after {
    content: '\\A';
    position: absolute;
    width: 100%;
    height: 100%;
    left: -100%;
    z-index: -1;
    background: ${(props: Props) => props.theme.colors.red_transparent};
    opacity: 0;
    transition: all 0.25s;
  }
  :hover:after {
    opacity: 1;
    left: -15%;
  }
`;
const Nav = () => (
  <NavStyles pose="open">
    <NavItem>
      <Link href="/" prefetch>
        <a>Home</a>
      </Link>
    </NavItem>

    <NavItem>
      <Link href="/articles" prefetch>
        <a>Articles</a>
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
      <Link href="/projects" prefetch>
        <a>Projects</a>
      </Link>
    </NavItem>
    <NavItem>
      <Link href="/models" prefetch>
        <a>Models</a>
      </Link>
    </NavItem>
    <NavItem>
      <Link href="/galleries" prefetch>
        <a>Galleries</a>
      </Link>
    </NavItem>

    <NavItem>
      <Link href="/contact-me" prefetch>
        <a>Contact Me</a>
      </Link>
    </NavItem>
  </NavStyles>
);

export default Nav;
