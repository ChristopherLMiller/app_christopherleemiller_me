import { SFC } from 'react';
import posed from 'react-pose';
import styled from 'styled-components';
//import { Props } from '../../../styles/Themes';
import Link from 'next/link';
import { canAccessPage, iCanAccessPage } from '../../../utils/functions/AuthChecker';
import { useRouter } from 'next/router';

const PosedNavItem = posed.li({
  open: {
    opacity: 1,
    x: `0%`,
  },
  closed: {
    opacity: 0,
    x: `-100%`,
  }
});

const StyledNavItem = styled(PosedNavItem)`
  display: ${(props: any) => props.display || 'none'};
  position: relative;
  font-family: var(--font-monospace);
  font-size: 2.5rem;
  list-style-type: none;
  line-height: 2em;
  background: ${(props: any) => props.isActive ? 'rgba(101, 26, 26, 0.8)' : 'none'};

  : after {
  content: '\\A';
  position: absolute;
  width: 100%;
  height: 100%;
  left: -100%;
  z-index: -1;
  background: rgba(101, 26, 26, 0.7);
  opacity: 0;
  transition: all 0.25s;
}
  : hover: after {
  opacity: 0.7;
  left: 0%;
}

@media(min - width: ${(props: any) => props.theme.sizes.small}) {
  font - size: 2rem;
  line - height: 2.5em;
}
`;

interface iNavItem {
  auth: iCanAccessPage;
  isActivePaths: string[];
  href: string;
  title: string
}

const NavItem: SFC<iNavItem> = ({ auth, isActivePaths, href, title }) => {
  const router = useRouter();

  return (
    <StyledNavItem
      display={canAccessPage(auth) ? 'block' : 'none'}
      aria-hidden={!canAccessPage(auth)}
      isActive={(isActivePaths.includes(router.pathname))}>
      <Link href={href}>
        <a>{title}</a>
      </Link>
    </StyledNavItem>
  )
}

export { NavItem }