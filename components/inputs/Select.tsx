import React, { SFC } from 'react';
import Router, { withRouter, SingletonRouter } from 'next/router';
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

interface Data {
  [key: string]: Array<Item>;
}
type Item = {
  id: string;
  slug: string;
  title: string;
  [key: string]: string;
};

type Items = Item[];

interface ISelectBox {
  items?: Items;
  query?: object;
  slug: string;
  field?: string;
  router: SingletonRouter;
}

const SelectBox: SFC<ISelectBox> = ({
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
        {items.map((item: Item) => (
          <option key={item.id} value={item.slug}>
            {item.title}
          </option>
        ))}
      </StyledSelect>
    )}

    {query && (
      <Query<Data> query={query}>
        {({ data, error, loading }) => {
          if (loading) return <p>Loading...</p>;
          if (error || !data) {
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
              {data[Object.keys(data)[0]].map((item: Item) => (
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
