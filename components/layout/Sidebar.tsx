import styled from 'styled-components';
import posed from 'react-pose';
import Logo from './Logo';
import Nav from './Nav';
import { SocialLinks } from '../SocialLinks';
import Title from './Title';
import { Props } from '../styles/Themes';

const SidebarPop = posed.aside({
  enter: {
    left: `0`,
  },
  exit: {
    left: `-100%`,
  },
});

const StyledSidebar = styled(SidebarPop)`
  position: relative;
  display: none;
  transition: all 0.5s;
  left: -100%;

  &:before {
    background: rgba(0, 0, 0);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '\\A';
    z-index: -1;
  }

  @media screen and (min-width: ${(props: Props) => props.theme.sizes.small}) {
    padding: 20px;
    display: initial;
  }
  @media screen and (min-width: ${(props: Props) =>
      props.theme.sizes.med_small}) {
    min-height: 100vh;
    &:before {
      background: rgba(0, 0, 0, 0.7);
    }
    padding: 40px;
  }
`;

const StyledSidebarInner = styled.div`
  position: sticky;
  top: 40px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Sidebar = () => (
  <StyledSidebar initialPose="exit" pose="enter">
    <StyledSidebarInner>
      <Logo />
      <Title />
      <Nav />
      <SocialLinks />
    </StyledSidebarInner>
  </StyledSidebar>
);

export default Sidebar;
