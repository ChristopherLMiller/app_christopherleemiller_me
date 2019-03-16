import styled from 'styled-components';
import Logo from './Logo';
import Title from './Title';
import Nav from './Nav';
import SocialLinks from '../SocialLinks';

const StyledSidebar = styled.aside`
  position: relative;

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

  @media (min-width: ${props => props.theme.small}) {
    padding: 20px;
  }
  @media (min-width: ${props => props.theme.med_small}) {
    min-height: 100vh;
    &:before {
      background: rgba(0, 0, 0, 0.7);
    }
    padding: 40px;
  }
`;

const StyledSidebarInner = styled.div`
  @media (min-width: ${props => props.theme.small}) {
    position: sticky;
    top: 40px;
  }
  display: flex;
  justify-content: space-between;
  flex-direction: column;
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
