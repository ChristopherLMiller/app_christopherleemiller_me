import Link from 'next/link';
import styled from 'styled-components';
import posed from 'react-pose';
import { Props } from '../../styles/Themes';

import { auth as ProjectsAuth } from '../../pages/projects';
import { auth as IndexAuth } from '../../pages/index';
import { auth as ArticlesAuth } from '../../pages/articles';
import { auth as ContactAuth } from '../../pages/contact-me';
import { auth as GalleryAuth } from '../../pages/galleries';
import { auth as ModelsAuth } from '../../pages/models';
import { auth as ServicesAuth } from '../../pages/services';
import { auth as AboutAuth } from '../../pages/about';
import { auth as AdminAuth } from '../../pages/admin';
import { canAccessPage } from '../../utils/functions/AuthChecker';

const PosedNav = posed.ul({
  open: {
    beforeChildren: true,
    staggerChildren: 100,
    delayChildren: 500,
  },
});

const NavStyles = styled(PosedNav)`
  padding-left: 0;
  position: relative;
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
  position: relative;
  font-family: var(--font-monospace);
  font-size: 2.5rem;
  list-style-type: none;
  line-height: 2em;

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
    font-size: 2rem;
    line-height: 2.5em;
  }
`;
const Nav = () => {

  return (
    <NavStyles pose="open">
      {canAccessPage(IndexAuth) &&
        <NavItem>
          <Link href="/">
            <a>Home</a>
          </Link>
        </NavItem>
      }

      {canAccessPage(ArticlesAuth) &&
        <NavItem>
          <Link href="/articles">
            <a>Articles</a>
          </Link>
        </NavItem>
      }

      {canAccessPage(AboutAuth) &&
        <NavItem>
          <Link href="/about">
            <a>About</a>
          </Link>
        </NavItem>
      }

      {canAccessPage(ServicesAuth) &&
        <NavItem>
          <Link href="/services">
            <a>Services</a>
          </Link>
        </NavItem>
      }

      {canAccessPage(ProjectsAuth) &&
        <NavItem>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </NavItem>
      }

      {canAccessPage(ModelsAuth) &&
        <NavItem>
          <Link href="/models">
            <a>Models</a>
          </Link>
        </NavItem>
      }

      {canAccessPage(GalleryAuth) &&
        <NavItem>
          <Link href="/galleries">
            <a>Galleries</a>
          </Link>
        </NavItem>
      }

      {canAccessPage(ContactAuth) &&
        <NavItem>
          <Link href="/contact-me">
            <a>Contact Me</a>
          </Link>
        </NavItem>
      }

      {canAccessPage(AdminAuth) &&
        <NavItem>
          <Link href="/admin">
            <a>Admin Panel</a>
          </Link>
        </NavItem>
      }

      {canAccessPage(AdminAuth) &&
        <NavItem>
          <a href="https://strapi.christopherleemiller.me/admin">Strapi</a>
        </NavItem>
      }
    </NavStyles>
  );
}
export default Nav;
