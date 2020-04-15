import Link from 'next/link';
import { FunctionComponent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Center } from '../styles/Generics';
import { PER_PAGE, STRAPI_ENDPOINT } from '../config';

const PaginationStyles = styled.div`
  text-align: center;
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  background: var(--main-color);
  color: var(--text-color-light);
  margin: 25px 0;
  & > * {
    margin: 0;
    padding: 15px 30px;
    border-right: 1px solid var(--background-darker);
    &:last-child {
      border-right: 0;
    }
  }
  a[aria-disabled='true'] {
    color: grey;
    pointer-events: none;
  }
`;
interface PaginationTypes {
  page: number;
  content_type: string;
}

const Pagination: FunctionComponent<PaginationTypes> = ({ page, content_type }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `${STRAPI_ENDPOINT}/${content_type}/count?status=PUBLISHED`,
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
