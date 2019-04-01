import React from 'react';
import propTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';

const TagsWrapper = styled.div`
  font-family: monospace;
  font-size: 1.25em;
`;

const TagsLink = styled.span`
  text-transform: uppercase;
`;

const Splitter = styled.div`
  color: ${props => props.theme.red};
  padding: 0 5px;
  display: inline-block;
`;

class Tags extends React.Component {
  static propTypes = {
    tags: propTypes.array,
  };

  render() {
    if (this.props.tags && this.props.tags.length > 0) {
      return (
        <TagsWrapper>
          <span>Tags: </span>
          {this.props.tags.map((tag, index) => (
            <TagsLink>
              {!!index && <Splitter>|</Splitter>}
              <Link href={`/tag?slug=${tag.slug}`} as={`/tag/${tag.slug}`}>
                {tag.title}
              </Link>
            </TagsLink>
          ))}
        </TagsWrapper>
      );
    }

    return (
      <TagsWrapper>
        <span>Tags: None</span>
      </TagsWrapper>
    );
  }
}

export default Tags;
