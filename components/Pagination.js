import React from 'react';
import propTypes from 'prop-types';
import { Query } from 'react-apollo';
import Link from 'next/link';
import PaginationStyles from './styles/PaginationStyles';
import { perPage } from '../config';
import { ARTICLE_PAGINATION_QUERY } from '../utils/query';

const Pagination = props => (
  <Query query={ARTICLE_PAGINATION_QUERY}>
    {({ data, loading, error }) => {
      if (loading) return <p>Loading...</p>;
      // eslint-disable-next-line prefer-destructuring
      const count = data.articlesConnection.aggregate.count;
      const pages = Math.ceil(count / perPage);
      // eslint-disable-next-line prefer-destructuring
      const page = props.page;
      return (
        <PaginationStyles>
          <Link
            prefetch
            href={{
              pathname: 'articles',
              query: { page: page - 1 },
            }}
          >
            <a className="prev" aria-disabled={page <= 1}>
              ← Prev
            </a>
          </Link>
          <p>
            Page {page} of {pages}
          </p>
          <p>{count} Articles Total</p>
          <Link
            prefetch
            href={{
              pathname: 'articles',
              query: { page: page + 1 },
            }}
          >
            <a className="prev" aria-disabled={page >= pages}>
              Next →
            </a>
          </Link>
        </PaginationStyles>
      );
    }}
  </Query>
);

Pagination.propTypes = {
  page: propTypes.string,
};

export default Pagination;
