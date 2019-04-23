import { SFC } from 'react';
import styled from 'styled-components';
import { Props } from './styles/Themes';

interface SidebarTypes {
  title: string,
  children: object,
};

const StyledSidebar = styled.div`
  margin-bottom: 50px;
`;

const StyledSidebarHeader = styled.h4`
  background: ${(props: Props) => props.theme.colors.red};
  margin: 0;
  padding: 20px;
  font-size: 1.5em;
`;

const StyledSidebarContent = styled.div`
  background: ${(props: Props) => props.theme.colors.grey}`;

const Sidebar: SFC<SidebarTypes> = ({ title, children }) => (
  <StyledSidebar>
    <StyledSidebarHeader>{title}</StyledSidebarHeader>
    <StyledSidebarContent>{children}</StyledSidebarContent>
  </StyledSidebar>
)

export { Sidebar };