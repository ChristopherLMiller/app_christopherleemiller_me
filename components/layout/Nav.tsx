import styled from "styled-components";
import { NavItem } from "components/layout/elements/NavItem";
import { motion } from "framer-motion";
import IosHomeOutline from "react-ionicons/lib/IosHomeOutline";
import IosMailOutline from "react-ionicons/lib/IosMailOutline";
import IosQuoteOutline from "react-ionicons/lib/IosQuoteOutline";
import IosPaperPlaneOutline from "react-ionicons/lib/IosPaperPlaneOutline";
import IosPersonOutline from "react-ionicons/lib/IosPersonOutline";
import IosGitBranch from "react-ionicons/lib/IosGitBranch";
import IosPhotosOutline from "react-ionicons/lib/IosPhotosOutline";
import IosCodeWorking from "react-ionicons/lib/IosCodeWorking";
import IosCogOutline from "react-ionicons/lib/IosCogOutline";

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
      <NavItem title="Home" isActivePaths={["/"]} href="/">
        <IosHomeOutline color="#FFF" fontSize="50px" />
      </NavItem>
      <NavItem isActivePaths={["/blog", "/post"]} href="/blog" title="My Blog">
        <IosQuoteOutline color="#FFF" fontSize="50px" />
      </NavItem>
      <NavItem isActivePaths={["/about"]} href="/about" title="About Me">
        <IosPersonOutline color="#FFF" fontSize="50px" />
      </NavItem>
      <NavItem isActivePaths={["/uses"]} href="/uses" title="Uses">
        <IosGitBranch color="#FFF" fontSize="50px" />
      </NavItem>
      <NavItem isActivePaths={["/projects"]} href="/projects" title="Projects">
        <IosCodeWorking color="#FFF" fontSize="50px" />
      </NavItem>
      <NavItem isActivePaths={["/models"]} href="/models" title="Models">
        <IosPaperPlaneOutline color="#FFF" fontSize="50px" />
      </NavItem>
      <NavItem
        isActivePaths={["/galleries"]}
        href="/galleries"
        title="Galleries"
      >
        <IosPhotosOutline color="#FFF" fontSize="50px" />
      </NavItem>
      <NavItem
        isActivePaths={["/contact-me"]}
        href="/contact-me"
        title="Contact Me"
      >
        <IosMailOutline color="#FFF" fontSize="50px" />
      </NavItem>
      <NavItem
        href="https://strapi.christopherleemiller.me/admin"
        title="Strapi Backend"
      >
        <IosCogOutline color="#FFF" fontSize="50px" />
      </NavItem>
    </NavStyles>
  );
};
export default Nav;
