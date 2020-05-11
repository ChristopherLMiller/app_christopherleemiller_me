import { FunctionComponent } from "react";
import styled from "styled-components";
import { Title } from "components/elements/Title";

interface SidebarTypes {
  title: string;
  children: object;
}

const StyledSidebar = styled.div`
  margin-bottom: 50px;
`;

const StyledSidebarContent = styled.div`
  background: var(--background-light);
  padding: 20px;
  font-size: var(--font-size-responsive);
  color: var(--text-color);
  font-weight: 300;

  h3 {
    color: var(--main-color);
  }
  p {
    margin: 0;
  }

  ul {
    margin: 0;
    list-style-type: none;
    padding-left: 0;
  }

  a {
    color: var(--main-color);
  }
  a:hover {
    text-decoration: underline;
  }
`;

const Sidebar: FunctionComponent<SidebarTypes> = ({ title, children }) => (
  <StyledSidebar>
    {title && <Title>{title}</Title>}
    <StyledSidebarContent>{children}</StyledSidebarContent>
  </StyledSidebar>
);

export { Sidebar };
