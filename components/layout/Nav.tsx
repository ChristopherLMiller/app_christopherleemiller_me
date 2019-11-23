import Link from 'next/link';
import styled from 'styled-components';
import posed from 'react-pose';
import { Props } from '../../styles/Themes';
import { useRouter } from 'next/router';

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
  }
});

const NavItem = styled(PosedNavItem)`
  display: ${(props: any) => props.display || 'none'};
  position: relative;
  font-family: var(--font-monospace);
  font-size: 2.5rem;
  list-style-type: none;
  line-height: 2em;
  background: ${(props: any) => props.isActive ? 'rgba(101, 26, 26, 0.6)' : 'none'};

  : after {
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
  : hover: after {
  opacity: 0.7;
  left: 0%;
}

@media(min - width: ${(props: Props) => props.theme.sizes.small}) {
  font - size: 2rem;
  line - height: 2.5em;
}
`;
const Nav = () => {
  const router = useRouter();

  console.log(router.pathname);

  return (
    <NavStyles pose="open">

      <NavItem
        display={canAccessPage(IndexAuth) ? 'block' : 'none'}
        aria-hidden={!canAccessPage(IndexAuth)}
        isActive={(router.pathname === '/')}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </NavItem>

      <NavItem
        display={canAccessPage(ArticlesAuth) ? 'block' : 'none'}
        aria-hidden={!canAccessPage(ArticlesAuth)}
        isActive={(router.pathname === '/articles' || router.pathname === '/post')}>
        <Link href="/articles">
          <a>Articles</a>
        </Link>
      </NavItem>

      <NavItem
        display={canAccessPage(AboutAuth) ? 'block' : 'none'}
        aria-hidden={!canAccessPage(AboutAuth)}
        isActive={(router.pathname === '/about')}>
        <Link href="/about">
          <a>About</a>
        </Link>
      </NavItem>

      <NavItem
        display={canAccessPage(ServicesAuth) ? 'block' : 'none'}
        aria-hidden={!canAccessPage(ServicesAuth)}
        isActive={(router.pathname === '/services')}>
        <Link href="/services">
          <a>Services</a>
        </Link>
      </NavItem>

      <NavItem
        display={canAccessPage(ProjectsAuth) ? 'block' : 'none'}
        aria-hidden={!canAccessPage(ProjectsAuth)}
        isActive={(router.pathname === '/projects')}>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
      </NavItem>

      <NavItem
        display={canAccessPage(ModelsAuth) ? 'block' : 'none'}
        aria-hidden={!canAccessPage(ModelsAuth)}
        isActive={(router.pathname === '/models' || router.pathname === '/model')}>
        <Link href="/models">
          <a>Models</a>
        </Link>
      </NavItem>

      <NavItem
        display={canAccessPage(GalleryAuth) ? 'block' : 'none'}
        aria-hidden={!canAccessPage(GalleryAuth)}
        isActive={(router.pathname === '/galleries')}>
        <Link href="/galleries">
          <a>Galleries</a>
        </Link>
      </NavItem>

      <NavItem
        display={canAccessPage(ContactAuth) ? 'block' : 'none'}
        aria-hidden={!canAccessPage(ContactAuth)}
        isActive={(router.pathname === '/contact-me')}>
        <Link href="/contact-me">
          <a>Contact Me</a>
        </Link>
      </NavItem>

      <NavItem
        display={canAccessPage(AdminAuth) ? 'block' : 'none'}
        aria-hidden={!canAccessPage(AdminAuth)}
        isActive={(router.pathname === '/admin')}>
        <Link href="/admin">
          <a>Admin Panel</a>
        </Link>
      </NavItem>

      <NavItem display={canAccessPage(AdminAuth) ? 'block' : 'none'} aria-hidden={!canAccessPage(AdminAuth)}>
        <a href="https://strapi.christopherleemiller.me/admin">Strapi</a>
      </NavItem>

    </NavStyles>
  );
}
export default Nav;
