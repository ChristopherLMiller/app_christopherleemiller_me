import { SFC } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import { Props } from './styles/Themes';

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
  margin-bottom: 50px;
  position: relative;
  right: -150%;
  transition: all 0.5s;
  transition-delay: 0.5s;
`;

const StyledSidebarHeader = styled.h4`
  background: ${(props: Props) => props.theme.colors.red};
  margin: 0;
  padding: 20px;
  font-size: 1.5em;
`;

const StyledSidebarContent = styled.div`
  background: ${(props: Props) => props.theme.colors.grey};
`;

const Sidebar: SFC<SidebarTypes> = ({ title, children }) => (
  <StyledSidebar initialPose="invisible" pose="visible">
    <StyledSidebarHeader>{title}</StyledSidebarHeader>
    <StyledSidebarContent>{children}</StyledSidebarContent>
  </StyledSidebar>
);

export { Sidebar };
