import Logo from './Logo';
import Nav from './Nav';
import SocialLinks from '../SocialLinks';
import styled from 'styled-components';
import Title from './Title';
import { Props } from '../styles/Themes';

const StyledSidebar = styled.aside`
  position: relative;
  display: none;

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
  @media screen and (min-width: ${(props: Props) => props.theme.sizes.med_small}) {
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
