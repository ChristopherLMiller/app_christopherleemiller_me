import { SFC } from 'react';
import Router, { withRouter, SingletonRouter } from 'next/router';
import { useQuery } from 'react-apollo';
import styled from 'styled-components';
import { DocumentNode } from 'graphql';
import { urlBuilder } from '../../utils/functions/url';

const StyledSelect = styled.select`
  font-family: var(--font-main);
  padding: 5px;
  font-size: 1.75rem;
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
  graphqlQuery?: DocumentNode;
  slug: string;
  field?: string;
  router: SingletonRouter;
}

const SelectBox: SFC<ISelectBox> = ({
  items,
  graphqlQuery,
  slug,
  field = `title`,
  router,
}) => {
  if (items) {
    return (
      <StyledSelect
        onChange={event => {
          const href = `${router.pathname}?${urlBuilder(
            router.query,
            slug,
            event.target.value
          )}`;
          Router.push(href, href, { shallow: false });
        }}
        value={router.query[slug]}
      >
        {items.map((item: Item) => (
          <option key={item.id} value={item.slug}>
            {item.title}
          </option>
        ))}
      </StyledSelect>
    );
  }

  if (graphqlQuery) {
    const { loading, data, error } = useQuery<Data>(graphqlQuery);

    if (loading)
      return (
        <StyledSelect>
          <option>Loading...</option>
        </StyledSelect>
      );
    if (error) {
      console.log(`Fetch Error: ${error.message}`);
      <StyledSelect>
        <option>------</option>
      </StyledSelect>;
    }

    return (
      <StyledSelect
        key={slug}
        onChange={event => {
          Router.push(
            `${router.pathname}?${urlBuilder(
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
        {data !== undefined &&
          data[Object.keys(data)[0]].map((item: Item) => (
            <option key={item.id} value={item.slug}>
              {item[field]}
            </option>
          ))}
      </StyledSelect>
    );
  }

  return (
    <StyledSelect>
      <option>All</option>
    </StyledSelect>
  );
};

const Select = withRouter(SelectBox);
export { Select };
