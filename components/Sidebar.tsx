import { SFC } from 'react';
import styled from 'styled-components';

interface SidebarTypes {
  title: string;
  children: object;
}

const StyledSidebar = styled.div`
  margin: 0 auto;
  margin-bottom: 50px;
`;

const StyledSidebarHeader = styled.h4`
  background: var(--main-color);
  margin: 0;
  padding: 20px;
  font-size: 1.5em;
`;

const StyledSidebarContent = styled.div`
  background: var(--background-dark);
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  h3 {
    color: var(--main-color);
    font-size: 1.5em;
  }
  p {
    margin: 0;
    font-size: 1.5em;
  }

  @media (min-width: ${(props: Props) => props.theme.sizes.med_small}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${(props: Props) => props.theme.sizes.med_large}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: ${(props: Props) => props.theme.sizes.extra_large}) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const Sidebar: SFC<SidebarTypes> = ({ title, children }) => (
  <StyledSidebar initialPose="invisible" pose="visible">
    {title && <StyledSidebarHeader>{title}</StyledSidebarHeader>}
    <StyledSidebarContent>{children}</StyledSidebarContent>
  </StyledSidebar>
);

export { Sidebar };
