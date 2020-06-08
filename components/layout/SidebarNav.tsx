import styled from "styled-components";
import Logo from "components/layout/elements/Logo";
import Nav from "components/layout/Nav";
import Title from "components/layout/elements/Title";
import { Props } from "styles/Themes";
import { motion } from "framer-motion";

const variants = {
  enter: {
    x: "0%",
    opacity: 1,
    transition: {
      duration: 0.25,
    },
  },
  exit: {
    x: "-100%",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const StyledSidebar = styled(motion.aside)`
  position: relative;
  display: none;

  &:before {
    background: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "\\A";
    z-index: -1;
  }

  @media (min-width: ${(props: Props) => props.theme.sizes.small}) {
    padding: 20px;
    display: initial;
  }
  @media (min-width: ${(props: Props) => props.theme.sizes.med_small}) {
    min-height: 100vh;
  }
`;

const NavHr = styled.hr`
  width: 100%;
  margin: 10px 0;
`;

const StyledSidebarInner = styled.div`
  position: sticky;
  top: 40px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const SiteHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  align-items: center;

  @media screen and (min-width: ${(props: Props) => props.theme.sizes.large}) {
    grid-template-columns: 20% 1fr;
  }
`;

const SidebarNav = () => {
  return (
    <StyledSidebar variants={variants}>
      <StyledSidebarInner>
        <SiteHeader>
          <Logo />
          <Title />
        </SiteHeader>

        <NavHr />
        <NavHr />
        <Nav />
      </StyledSidebarInner>
    </StyledSidebar>
  );
};
export default SidebarNav;
