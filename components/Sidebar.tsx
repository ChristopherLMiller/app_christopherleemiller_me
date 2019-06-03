import { SFC } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

interface SidebarTypes {
  title: string;
  children: object;
}

const SidebarPopped = posed.div({
  visible: {
    right: `0`,
  },
  invisible: {
    right: `-150%`,
  },
});

const StyledSidebar = styled(SidebarPopped)`
  margin: 0 auto;
  margin-bottom: 50px;
  position: relative;
  right: -150%;
  transition: all 0.5s;
  transition-delay: 0.5s;
  max-width: 350px;
`;

const StyledSidebarHeader = styled.h4`
  background: var(--main-color);
  margin: 0;
  padding: 20px;
  font-size: 1.5em;
`;

const StyledSidebarContent = styled.div`
  background: var(--background-dark);
  padding: 20px;
  padding-top: 0;

  h3 {
    color: var(--main-color);
    font-size: 1.5em;
  }
  p {
    margin: 0;
    font-size: 1.5em;
  }
`;

const Sidebar: SFC<SidebarTypes> = ({ title, children }) => (
  <StyledSidebar initialPose="invisible" pose="visible">
    {title && <StyledSidebarHeader>{title}</StyledSidebarHeader>}
    <StyledSidebarContent>{children}</StyledSidebarContent>
  </StyledSidebar>
);

export { Sidebar };
