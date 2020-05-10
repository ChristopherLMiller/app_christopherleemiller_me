import styled from "styled-components";
import { NavItem } from "components/layout/elements/NavItem";
import { GalleriesAuth } from "pages/galleries";
import { ServicesAuth } from "pages/services";
import { ProjectsAuth } from "pages/projects";
import { useProvideAuth } from "lib/hook/useAuth";
import { motion } from "framer-motion";

/*
TODO: do this but with motion
const PosedNav = posed.ul({
  open: {
    beforeChildren: true,
    staggerChildren: 100,
    delayChildren: 500,
  },
});*/

const NavStyles = styled(motion.ul)`
  padding-left: 0;
  position: relative;
`;

const Nav = () => {
  const auth = useProvideAuth();
  return (
    <NavStyles initial="exit" animate="enter">
      <NavItem title="Home" isActivePaths={["/"]} href="/" />
      <NavItem
        isActivePaths={["/articles", "/post"]}
        href="/articles"
        title="Articles"
      />
      <NavItem isActivePaths={["/about"]} href="/about" title="About Me" />
      <NavItem isActivePaths={["/uses"]} href="/uses" title="Uses" />
      <NavItem
        authObject={ServicesAuth}
        isActivePaths={["/services"]}
        href="/services"
        title="Services"
      />
      <NavItem
        authObject={ProjectsAuth}
        isActivePaths={["/projects"]}
        href="/projects"
        title="Projects"
      />
      <NavItem
        isActivePaths={["/models", "/model"]}
        href="/models"
        title="Models"
      />
      <NavItem
        authObject={GalleriesAuth}
        isActivePaths={["/galleries", "/gallery"]}
        href="/galleries"
        title="Galleries"
      />
      <NavItem
        isActivePaths={["/contact-me"]}
        href="/contact-me"
        title="Contact Me"
      />
      {auth.isAuthenticated && (
        <NavItem
          href="https://strapi.christopherleemiller.me/admin"
          title="Strapi Backend"
        />
      )}
    </NavStyles>
  );
};
export default Nav;
