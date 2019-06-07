import Link from 'next/link';
import React, { SFC, useEffect, useState } from 'react';
import PaginationStyles from '../styles/PaginationStyles';
import { Center } from '../styles/Themes';
import { PER_PAGE, STRAPI_ENDPOINT } from '../config';

interface PaginationTypes {
  page: number;
  content_type: string;
}

const Pagination: SFC<PaginationTypes> = ({ page, content_type }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `${STRAPI_ENDPOINT}/${content_type}/count?published=true`,
        {
          headers: {
            'Content-Type': `application/json`,
          },
        }
      );
      const data = await response.json();
      setCount(data);
    }
    fetchData();
  });

  return (
    <Center>
      <PaginationStyles>
        <Link
          prefetch
          href={{
            pathname: `${content_type}`,
            query: { page: page - 1 },
          }}
        >
          <a className="prev" aria-disabled={page <= 1}>
            ← Prev
          </a>
        </Link>
        <p>
          Page {page} of {Math.ceil(count / PER_PAGE)}
        </p>
        <p>
          {count} {content_type} Total
        </p>
        <Link
          prefetch
          href={{
            pathname: `${content_type}`,
            query: { page: page + 1 },
          }}
        >
          <a
            className="next"
            aria-disabled={page >= Math.ceil(count / PER_PAGE)}
          >
            Next →
          </a>
        </Link>
      </PaginationStyles>
    </Center>
  );
};
export { Pagination };
