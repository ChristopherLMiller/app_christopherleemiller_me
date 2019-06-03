import React, { SFC } from 'react';
import Router, { withRouter } from 'next/router';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import { urlBuilder } from '../utils/url';

const StyledSidebarDropdown = styled.div`
  border-bottom: 2px solid var(--background-light);
  padding: 0 30px;

  :last-of-type {
    border-bottom: none;
  }
`;

const SidebarDropdownHeading = styled.h5`
  margin: 0;
  color: var(--background-darker);
  text-align: center;
  font-size: 1.5em;
  font-family: var(--font-family);
  text-transform: uppercase;
  text-decoration: underline;
  padding: 20px 0 0 0;
`;

const SidebarDropdownSelect = styled.select`
  font-family: var(--font-family);
  padding: 5px;
  font-size: 1.25em;
  width: 100%;
  outline: var(--main-color-transparent);
  border: 1px solid var(--main-color-transparent);
  margin: 15px 0;
`;

interface SidebarDropdownTypes {
  items?: Array<object>;
  query?: string;
  slug: string;
  title: string;
  field?: string;
}

const Dropdown: SFC<SidebarDropdownTypes> = ({
  items,
  query,
  slug,
  title,
  field = `title`,
}) => (
  <StyledSidebarDropdown>
    <SidebarDropdownHeading>{title}</SidebarDropdownHeading>
    {items && (
      <SidebarDropdownSelect
        onChange={event => {
          Router.push(urlBuilder(Router.asPath, slug, event.target.value));
        }}
      >
        {items.map(item => (
          <option key={item.id} value={item.slug}>
            {item.title}
          </option>
        ))}
      </SidebarDropdownSelect>
    )}

    {query && (
      <Query query={query}>
        {({ data, error, loading }) => {
          if (loading) return <p>Loading...</p>;
          if (error) {
            console.log(`Fetch Error: ${error}`);
            return null;
          }

          return (
            <SidebarDropdownSelect
              key={slug}
              onChange={event => {
                Router.push(
                  urlBuilder(Router.asPath, slug, event.target.value)
                );
              }}
            >
              <option key="all" value="">
                All
              </option>
              {data[Object.keys(data)[0]].map(item => (
                <option key={item.id} value={item.slug}>
                  {item[field]}
                </option>
              ))}
            </SidebarDropdownSelect>
          );
        }}
      </Query>
    )}
  </StyledSidebarDropdown>
);

const SidebarDropdown = withRouter(Dropdown);
export { SidebarDropdown };
