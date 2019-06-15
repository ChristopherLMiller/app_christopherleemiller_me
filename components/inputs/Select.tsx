import React, { SFC, Fragment } from 'react';
import Router, { withRouter } from 'next/router';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import { urlBuilder } from '../../utils/url';

const StyledSelect = styled.select`
  font-family: var(--font-family);
  padding: 5px;
  font-size: 1.25em;
  width: 100%;
  outline: var(--main-color-transparent);
  border: 1px solid var(--main-color-transparent);
  margin: 15px 0;
`;

interface SelectTypes {
  items?: Array<object>;
  query?: string;
  slug: string;
  field?: string;
  router: object;
}

const SelectBox: SFC<SelectTypes> = ({
  items,
  query,
  slug,
  field = `title`,
  router,
}) => (
  <div>
    {items && (
      <StyledSelect
        onChange={event => {
          Router.push(
            `${router.pathname}${urlBuilder(
              router.query,
              slug,
              event.target.value
            )}`
          );
        }}
        value={router.query[slug]}
      >
        {items.map(item => (
          <option key={item.id} value={item.slug}>
            {item.title}
          </option>
        ))}
      </StyledSelect>
    )}

    {query && (
      <Query query={query}>
        {({ data, error, loading }) => {
          if (loading) return <p>Loading...</p>;
          if (error) {
            console.log(`Fetch Error: ${error}`);
            return (
              <StyledSelect
                onChange={event => {
                  Router.push(
                    `${router.pathname}${urlBuilder(
                      router.query,
                      slug,
                      event.target.value
                    )}`
                  );
                }}
                value={router.query[slug]}
              >
                <option key="all" value="">
                  All
                </option>
              </StyledSelect>
            );
          }

          return (
            <StyledSelect
              key={slug}
              onChange={event => {
                Router.push(
                  `${router.pathname}${urlBuilder(
                    router.query,
                    slug,
                    event.target.value
                  )}`
                );
              }}
              value={router.query[slug]}
            >
              <option key="all" value="">
                All
              </option>
              {data[Object.keys(data)[0]].map(item => (
                <option key={item.id} value={item.slug}>
                  {item[field]}
                </option>
              ))}
            </StyledSelect>
          );
        }}
      </Query>
    )}
  </div>
);
const Select = withRouter(SelectBox);
export { Select };
