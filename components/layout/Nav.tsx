
import styled from 'styled-components';
import posed from 'react-pose';
import { NavItem } from './elements/NavItem';
import { auth as IndexAuth } from '../../pages/index';
import { auth as ArticlesAuth } from '../../pages/articles';
import { auth as ContactAuth } from '../../pages/contact-me';
import { auth as GalleryAuth } from '../../pages/galleries';
import { auth as ModelsAuth } from '../../pages/models';
import { auth as ServicesAuth } from '../../pages/services';
import { auth as ProjectsAuth } from '../../pages/projects';
import { auth as AboutAuth } from '../../pages/about';
import { auth as AdminAuth } from '../../pages/admin';

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

const Nav = () => {
  return (
    <NavStyles pose="open">

      <NavItem auth={IndexAuth} title="Home" isActivePaths={["/"]} href="/" />
      <NavItem auth={ArticlesAuth} isActivePaths={["/articles", "/post"]} href="/articles" title="Articles" />
      <NavItem auth={AboutAuth} isActivePaths={["/about"]} href="/about" title="About Me" />
      <NavItem auth={ServicesAuth} isActivePaths={["/services"]} href="/services" title="Services" />
      <NavItem auth={ProjectsAuth} isActivePaths={["/projects"]} href="/projects" title="Projects" />
      <NavItem auth={ModelsAuth} isActivePaths={["/models", "/model"]} href="/models" title="Models" />
      <NavItem auth={GalleryAuth} isActivePaths={["/galleries", "/gallery"]} href="/galleries" title="Galleries" />
      <NavItem auth={ContactAuth} isActivePaths={["/contact-me"]} href="/contact-me" title="Contact Me" />
      <NavItem auth={AdminAuth} isActivePaths={["/admin"]} href="/admin" title="Admin Panel" />
      <NavItem auth={AdminAuth} isActivePaths={["/admin"]} href="https://strapi.christopherleemiller.me/admin" title="Strapi Backend" />
    </NavStyles>
  );
}
export default Nav;
