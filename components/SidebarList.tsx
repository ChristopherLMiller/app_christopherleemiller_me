import { SFC } from 'react';
import styled from 'styled-components';
import { Props } from './styles/Themes';

const StyledSidebarList = styled.div`
  border-bottom: 2px solid ${(props: Props) => props.theme.colors.grey_darker};
`;

const SidebarListHeading = styled.h5`
  margin: 0;
  color: ${(props: Props) => props.theme.colors.grey_darkest};
  text-align: center;
  font-size: 1.5em;
  font-family: 'Special Elite';
  text-transform: uppercase;
  text-decoration: underline;
  padding: 20px 0 0 0;
`;

const SidebarListings = styled.ul`
  list-style-type: none;
  padding: 0 30px;
`;

const SidebarItem = styled.li`
  color: ${(props: Props) => props.theme.colors.black};
  font-size: 1.25em;
  font-family: 'Special Elite';
`;

interface SidebarListTypes {
  title: string,
  items: Array<object>,
}

const SidebarList: SFC<SidebarListTypes> = ({ title, items }) => (
  <StyledSidebarList>
    <SidebarListHeading>{title}</SidebarListHeading>
    <SidebarListings>
      <SidebarItem>TODO</SidebarItem>
    </SidebarListings>
  </StyledSidebarList>
);

export { SidebarList };