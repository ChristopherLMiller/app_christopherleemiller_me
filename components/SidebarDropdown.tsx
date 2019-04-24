import React from 'react';
import styled from 'styled-components';
import { Props } from './styles/Themes';
import Router from 'next/router';

const StyledSidebarDropdown = styled.div`
  border-bottom: 2px solid ${(props: Props) => props.theme.colors.grey_darker};
  padding: 0 30px;;
`;

const SidebarDropdownHeading = styled.h5`
  margin: 0;
  color: ${(props: Props) => props.theme.colors.grey_darkest};
  text-align: center;
  font-size: 1.5em;
  font-family: 'Special Elite';
  text-transform: uppercase;
  text-decoration: underline;
  padding: 20px 0 0 0;
`;

const SidebarDropdownSelect = styled.select`
  font-family: 'Special ELite';
  text-transform: uppercase;
  padding: 5px;
  font-size: 1.25em;
  width: 100%;
  outline: ${(props: Props) => props.theme.colors.red_transparent};
  margin: 15px 0;
`;

interface SidebarDropdownTypes {
  items: Array<object>
}

class SidebarDropdown extends React.Component<SidebarDropdownTypes> {

  handleChange = (event) => {
    Router.push(`/models?sort=${event.target.value}`);
  };

  render() {
    return (
      // selectively render for items array
      <StyledSidebarDropdown>
        <SidebarDropdownHeading>Sort By</SidebarDropdownHeading>
        <SidebarDropdownSelect onChange={this.handleChange}>
          {this.props.items.map(item => (
            <option key={item.id} value={item.slug}>{item.title}</option>
          ))}
        </SidebarDropdownSelect>
      </StyledSidebarDropdown>
    );
  }
}

export { SidebarDropdown };