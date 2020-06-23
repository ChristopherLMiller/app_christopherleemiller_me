import { FunctionComponent, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { Props } from "styles/Themes";
import { motion } from "framer-motion";

/*
TODO: make this work with motion
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
*/

interface iStyledNavItem {
  display: string;
  isActive: boolean;
}

const StyledNavItem = styled(motion.li)<iStyledNavItem>`
  display: flex;
  position: relative;
  font-family: var(--font-monospace);
  font-size: 2rem;
  list-style-type: none;
  line-height: 2em;
  padding: 5px;
  background: ${(props) =>
    props.isActive ? "rgba(101, 26, 26, 0.8)" : "none"};

  a {
    display: block;
    min-width: 200px;
  }

  :after {
    content: "\\A";
    position: absolute;
    width: 100%;
    height: 100%;
    left: -100%;
    top: 0;
    z-index: -1;
    background: rgba(101, 26, 26, 0.7);
    opacity: 0;
    transition: all 0.25s;
  }
  :hover: after {
    opacity: 0.7;
    left: 0%;
  }

  @media (min-width: ${(props: Props) => props.theme.sizes.small}) {
    font-size: 2rem;
  }
  @media (min-height: 800px) {
    line-height: 2.5em;
  }
`;

interface iNavItemLink {
  isHovered: Boolean;
}

const NavItemLink = styled.div<iNavItemLink>`
  position: absolute;
  left: ${(props) => (props.isHovered ? "100%" : "-500%")};
  opacity: ${(props) => (props.isHovered ? "1" : "0")};
  top: 0;
  background: var(--main-color);
  height: 100%;
  transition: all 0.25s;
  display: flex;
  align-items: center;
  padding: 0 10px;
  box-shadow: var(--box-shadow);
`;

interface iNavItem {
  isActivePaths?: string[];
  href: string;
  title: string;
}

const NavItem: FunctionComponent<iNavItem> = ({
  isActivePaths,
  href,
  title,
  children,
}) => {
  const router = useRouter();
  const [isHovered, setHovered] = useState(false);

  // check if the href is full or not, this matters for linking
  const isHrefLocal = href.includes("http") ? false : true;

  return (
    <StyledNavItem
      display={"block"}
      aria-hidden={false}
      isActive={isActivePaths ? isActivePaths.includes(router.pathname) : false}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {children}
      <NavItemLink isHovered={isHovered}>
        {isHrefLocal && (
          <Link href={href}>
            <a>{title}</a>
          </Link>
        )}
        {!isHrefLocal && <a href={href}>{title}</a>}
      </NavItemLink>
    </StyledNavItem>
  );
};

export { NavItem };
