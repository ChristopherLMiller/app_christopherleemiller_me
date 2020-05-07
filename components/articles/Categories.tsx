import Link from "next/link";
import { FunctionComponent } from "react";
import styled from "styled-components";
import { iCategories } from "../../utils/queries/categories";

const CategoriesWrapper = styled.span`
  font-family: var(--font-monospace);
  font-size: 1.75rem;
`;
const CategoriesLink = styled.span`
  text-transform: uppercase;
`;

const Splitter = styled.div`
  color: var(--main-color);
  padding: 0 5px;
  display: inline-block;
`;

const Categories: FunctionComponent<iCategories> = ({ categories }) => (
  <CategoriesWrapper>
    <span>Categories: </span>
    {categories.map((category, index) => (
      <CategoriesLink key={category.id}>
        {!!index && <Splitter>|</Splitter>}
        <Link
          href={`/articles?category=${category.slug}`}
          as={`/articles?category=${category.slug}`}
        >
          <a>{category.title}</a>
        </Link>
      </CategoriesLink>
    ))}
    {categories.length < 1 && <span>Uncategorized</span>}
  </CategoriesWrapper>
);

export { Categories };
