
import styled from 'styled-components';
import posed from 'react-pose';
import { NavItem } from './elements/NavItem';
import { galleriesAuth } from '../../pages/galleries';
import { servicesAuth } from '../../pages/services';
import { projectsAuth } from '../../pages/projects';
import { adminAuth } from '../../pages/admin';

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
      <NavItem title="Home" isActivePaths={["/"]} href="/" />
      <NavItem isActivePaths={["/articles", "/post"]} href="/articles" title="Articles" />
      <NavItem isActivePaths={["/about"]} href="/about" title="About Me" />
      <NavItem auth={servicesAuth} isActivePaths={["/services"]} href="/services" title="Services" />
      <NavItem auth={projectsAuth} isActivePaths={["/projects"]} href="/projects" title="Projects" />
      <NavItem isActivePaths={["/models", "/model"]} href="/models" title="Models" />
      <NavItem auth={galleriesAuth} isActivePaths={["/galleries", "/gallery"]} href="/galleries" title="Galleries" />
      <NavItem isActivePaths={["/contact-me"]} href="/contact-me" title="Contact Me" />
      <NavItem auth={adminAuth} isActivePaths={["/admin"]} href="/admin" title="Admin Panel" />
      <NavItem auth={adminAuth} href="https://strapi.christopherleemiller.me/admin" title="Strapi Backend" />
    </NavStyles>
  );
}
export default Nav;
