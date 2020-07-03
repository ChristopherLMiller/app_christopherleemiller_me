import styled from "styled-components";
import { NavItem } from "components/layout/elements/NavItem";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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
  const [isLoading, setLoading] = useState(true);
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await import("data/nav.json");

      setLoading(false);
      //@ts-ignore
      setNavLinks(data.items);
    }
    fetchData();
  });
  return (
    <NavStyles initial="exit" animate="enter">
      {!isLoading &&
        navLinks != undefined &&
        navLinks.map((item: any) => (
          <NavItem
            title={item.title}
            isActivePaths={item.activePaths}
            href={item.href}
            key={item.href}
          >
            {item.title}
          </NavItem>
        ))}
    </NavStyles>
  );
};
export default Nav;
