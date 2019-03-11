import styled from 'styled-components';
import Logo from './Logo';
import Title from './Title';
import Nav from './Nav';
import SocialLinks from '../SocialLinks';

const StyledSidebar = styled.aside`
  min-height: 100vh;
  padding: 40px;
  position: relative;

  &:before {
    background: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '\\A';
    z-index: -1;
  }
`;

const StyledSidebarInner = styled.div`
  position: fixed;
`;

const Sidebar = () => (
  <StyledSidebar>
    <StyledSidebarInner>
      <Logo />
      <Title />
      <Nav />
      <SocialLinks />
    </StyledSidebarInner>
  </StyledSidebar>
);
export default Sidebar;
