import React, { SFC } from 'react';
import { Query } from 'react-apollo';
import Link from 'next/link';
import PaginationStyles from './styles/PaginationStyles';
import { PER_PAGE } from '../config';
import { ARTICLE_PAGINATION_QUERY } from '../utils/query';

interface PaginationProps {
  page: number,
}

const Pagination: SFC<PaginationProps> = ({ page }) => (
  <Query query={ARTICLE_PAGINATION_QUERY}>
    {({ data, loading }) => {
      if (loading) return <p>Loading...</p>;
      // eslint-disable-next-line prefer-destructuring
      const count = data.articlesConnection.aggregate.count;
      const pages = Math.ceil(count / PER_PAGE);
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

export default Pagination;
