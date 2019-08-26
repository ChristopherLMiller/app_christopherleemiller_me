import Link from 'next/link';
import styled from 'styled-components';
import posed from 'react-pose';
import { Props } from '../../styles/Themes';

const PosedNav = posed.ul({
  open: {
    beforeChildren: true,
    staggerChildren: 100,
    delayChildren: 500,
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
  font-family: var(--font-monospace);
  font-size: 1.75em;
  list-style-type: none;
  line-height: 2.5em;

  :after {
    content: '\\A';
    position: absolute;
    width: 100%;
    height: 100%;
    left: -100%;
    z-index: -1;
    background: var(--main-color);
    opacity: 0;
    transition: all 0.25s;
  }
  :hover:after {
    opacity: 0.7;
    left: -15%;
  }

  @media (min-width: ${(props: Props) => props.theme.sizes.small}) {
    font-size: 1.4em;
    line-height: 2em;
  }
`;
const Nav = () => (
  <NavStyles pose="open">
    <NavItem>
      <Link href="/">
        <a>Home</a>
      </Link>
    </NavItem>

    <NavItem>
      <Link href="/articles">
        <a>Articles</a>
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
      <Link href="/projects">
        <a>Projects</a>
      </Link>
    </NavItem>
    <NavItem>
      <Link href="/models">
        <a>Models</a>
      </Link>
    </NavItem>
    <NavItem>
      <Link href="/galleries">
        <a>Galleries</a>
      </Link>
    </NavItem>

    <NavItem>
      <Link href="/contact-me">
        <a>Contact Me</a>
      </Link>
    </NavItem>
  </NavStyles>
);

export default Nav;
