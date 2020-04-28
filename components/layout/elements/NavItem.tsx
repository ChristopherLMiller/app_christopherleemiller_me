import { FunctionComponent } from "react";
import posed from "react-pose";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useProvideAuth, iAuthObject } from "../../../lib/hook/useAuth";

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

const StyledNavItem = styled(PosedNavItem)`
  display: ${(props: any) => props.display || "none"};
  position: relative;
  font-family: var(--font-monospace);
  font-size: 2.5rem;
  list-style-type: none;
  line-height: 2em;
  background: ${(props: any) =>
    props.isActive ? "rgba(101, 26, 26, 0.8)" : "none"};

  :after {
    content: "\\A";
    position: absolute;
    width: 100%;
    height: 100%;
    left: -100%;
    z-index: -1;
    background: rgba(101, 26, 26, 0.7);
    opacity: 0;
    transition: all 0.25s;
  }
  :hover: after {
    opacity: 0.7;
    left: 0%;
  }

  @media (min - width: ${(props: any) => props.theme.sizes.small}) {
    font-size: 2rem;
    line-height: 2.5em;
  }
`;

interface iNavItem {
  authObject?: iAuthObject | undefined;
  isActivePaths?: string[];
  href: string;
  title: string;
}

const NavItem: FunctionComponent<iNavItem> = ({
  isActivePaths,
  href,
  title,
  authObject,
}) => {
  const router = useRouter();
  const auth = useProvideAuth();

  // check if the href is full or not, this matters for linking
  const isHrefLocal = href.includes("http") ? false : true;

  if (auth.canAccessResource(authObject)) {
    return (
      <StyledNavItem
        display="block"
        aria-hidden={!auth.canAccessResource(authObject)}
        isActive={isActivePaths ? isActivePaths.includes(router.pathname) : ""}
      >
        {isHrefLocal && (
          <Link href={href}>
            <a>{title}</a>
          </Link>
        )}
        {!isHrefLocal && <a href={href}>{title}</a>}
      </StyledNavItem>
    );
  } else if (auth && !auth.canAccessResource(authObject)) {
    return null;
  } else {
    return (
      <StyledNavItem
        display={"block"}
        aria-hidden={false}
        isActive={isActivePaths ? isActivePaths.includes(router.pathname) : ""}
      >
        {isHrefLocal && (
          <Link href={href}>
            <a>{title}</a>
          </Link>
        )}
        {!isHrefLocal && <a href={href}>{title}</a>}
      </StyledNavItem>
    );
  }
};

export { NavItem };
