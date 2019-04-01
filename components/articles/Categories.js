import React from 'react';
import propTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';

const CategoriesWrapper = styled.span`
  font-family: monospace;
  font-size: 1.25em;
`;
const CategoriesLink = styled.span`
  text-transform: uppercase;
`;

const Splitter = styled.div`
  color: ${props => props.theme.red};
  padding: 0 5px;
  display: inline-block;
`;

class Categories extends React.Component {
  static propTypes = {
    categories: propTypes.array,
  };

  render() {
    if (this.props.categories && this.props.categories.length > 0) {
      return (
        <CategoriesWrapper>
          <span>Categories: </span>
          {this.props.categories.map((category, index) => (
            <CategoriesLink>
              {!!index && <Splitter>|</Splitter>}
              <Link
                href={`/articles?slug=${category.slug}`}
                as={`/category/${category.slug}`}
              >
                {category.title}
              </Link>
            </CategoriesLink>
          ))}
        </CategoriesWrapper>
      );
    }

    return (
      <CategoriesWrapper>
        <span>Categories: None</span>
      </CategoriesWrapper>
    );
  }
}

export default Categories;
