import Link from 'next/link';
import styled from 'styled-components';
import { Props } from '../styles/Themes';

const NavStyles = styled.ul`
  padding-left: 0;
`;

const NavItem = styled.li`
  font-family: monospace;
  font-size: 1.3em;
  list-style-type: none;
  line-height: 2em;
  position: relative;
  display: block;
  text-align: center;

  :after {
    content: '\\A';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    z-index: -1;
    background: ${(props: Props) => props.theme.colors.red_transparent};
    opacity: 0;
    transition: all 0.25s;
  }
  :hover:after {
    opacity: 1;
  }
`;
const Nav = () => (
  <NavStyles>
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
