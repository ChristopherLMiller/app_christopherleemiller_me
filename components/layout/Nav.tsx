import styled from "styled-components";
import { NavItem } from "components/layout/elements/NavItem";
import { motion } from "framer-motion";
import { FunctionComponent } from "react";
import IosHomeOutline from "react-ionicons/lib/IosHomeOutline";
import IosMailOutline from "react-ionicons/lib/IosMailOutline";
import IosQuoteOutline from "react-ionicons/lib/IosQuoteOutline";
import IosPaperPlaneOutline from "react-ionicons/lib/IosPaperPlaneOutline";
import IosPersonOutline from "react-ionicons/lib/IosPersonOutline";
import IosGitBranch from "react-ionicons/lib/IosGitBranch";
import IosPhotosOutline from "react-ionicons/lib/IosPhotosOutline";
import IosCodeWorking from "react-ionicons/lib/IosCodeWorking";
import IosCogOutline from "react-ionicons/lib/IosCogOutline";
import IosConstructOutline from "react-ionicons/lib/IosConstructOutline";
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

interface iNav {
  isExpanded: boolean;
}

const Nav: FunctionComponent<iNav> = ({ isExpanded }) => {
  return (
    <NavStyles initial="exit" animate="enter">
      <NavItem
        title="Home"
        isActivePaths={["/"]}
        href="/"
        isExpanded={isExpanded}
      >
        <IosHomeOutline color="#FFF" fontSize="50px" />
      </NavItem>
      <NavItem
        isActivePaths={["/blog", "/post"]}
        href="/blog"
        title="My Blog"
        isExpanded={isExpanded}
      >
        <IosQuoteOutline color="#FFF" fontSize="50px" />
      </NavItem>
      <NavItem
        isActivePaths={["/about"]}
        href="/about"
        isExpanded={isExpanded}
        title="About Me"
      >
        <IosPersonOutline color="#FFF" fontSize="50px" />
      </NavItem>
      <NavItem
        isActivePaths={["/uses"]}
        href="/uses"
        title="Uses"
        isExpanded={isExpanded}
      >
        <IosGitBranch color="#FFF" fontSize="50px" />
      </NavItem>
      <NavItem
        isActivePaths={["/services"]}
        href="/services"
        title="Services"
        isExpanded={isExpanded}
      >
        <IosConstructOutline color="#FFF" fontSize="50px" />
      </NavItem>
      <NavItem
        isActivePaths={["/projects"]}
        href="/projects"
        title="Projects"
        isExpanded={isExpanded}
      >
        <IosCodeWorking color="#FFF" fontSize="50px" />
      </NavItem>
      <NavItem
        isActivePaths={["/models"]}
        href="/models"
        title="Models"
        isExpanded={isExpanded}
      >
        <IosPaperPlaneOutline color="#FFF" fontSize="50px" />
      </NavItem>
      <NavItem
        isActivePaths={["/galleries"]}
        href="/galleries"
        title="Galleries"
        isExpanded={isExpanded}
      >
        <IosPhotosOutline color="#FFF" fontSize="50px" />
      </NavItem>
      <NavItem
        isActivePaths={["/contact-me"]}
        href="/contact-me"
        title="Contact Me"
        isExpanded={isExpanded}
      >
        <IosMailOutline color="#FFF" fontSize="50px" />
      </NavItem>
      <NavItem
        href="https://strapi.christopherleemiller.me/admin"
        title="Strapi Backend"
        isExpanded={isExpanded}
      >
        <IosCogOutline color="#FFF" fontSize="50px" />
      </NavItem>
    </NavStyles>
  );
};
export default Nav;
