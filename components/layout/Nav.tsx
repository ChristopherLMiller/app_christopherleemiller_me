import styled from "styled-components";
import { NavItem } from "components/layout/elements/NavItem";
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
  margin: 0;
`;

const Nav = () => {
  return (
    <NavStyles initial="exit" animate="enter">
      <NavItem title="Home" isActivePaths={["/"]} href="/" />
      <NavItem
        isActivePaths={["/blog", "/post"]}
        href="/blog"
        title="My Blog"
      />
      <NavItem isActivePaths={["/about"]} href="/about" title="About Me" />
      <NavItem isActivePaths={["/uses"]} href="/uses" title="Uses" />
      <NavItem
        isActivePaths={["/services"]}
        href="/services"
        title="Services"
      />
      <NavItem
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
        isActivePaths={["/galleries", "/gallery"]}
        href="/galleries"
        title="Galleries"
      />
      <NavItem
        isActivePaths={["/contact-me"]}
        href="/contact-me"
        title="Contact Me"
      />
      <NavItem
        href="https://strapi.christopherleemiller.me/admin"
        title="Strapi Backend"
      />
    </NavStyles>
  );
};
export default Nav;
