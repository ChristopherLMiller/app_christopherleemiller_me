import Link from 'next/link';
import React, { SFC } from 'react';
import styled from 'styled-components';
import { CategoriesType } from './Types';
import { Props } from '../styles/Themes';

const CategoriesWrapper = styled.span`
  font-family: monospace;
  font-size: 1.25em;
`;
const CategoriesLink = styled.span`
  text-transform: uppercase;
`;

const Splitter = styled.div`
  color: ${(props: Props) => props.theme.colors.red};
  padding: 0 5px;
  display: inline-block;
`;

const Categories: SFC<CategoriesType> = ({ categories }) => (
  <CategoriesWrapper>
    <span>Categories: </span>
    {categories.map((category, index) => (
      <CategoriesLink key={category._id}>
        {!!index && <Splitter>|</Splitter>}
        <Link
          href={`/articles?slug=${category.slug}`}
          as={`/category/${category.slug}`}
        >
          <a>{category.title}</a>
        </Link>
      </CategoriesLink>
    ))}
    {(categories.length < 1) && (
      <span>None</span>
    )}
  </CategoriesWrapper>
);

export default Categories;
