import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const StyledCommentCount = styled.p`
  text-align: right;
`;

class CommentCount extends React.Component {
  static propTypes = {
    comments: propTypes.array,
  };

  render() {
    let comments = 0;

    if (this.props.comments) {
      comments = this.props.comments.length;
    }
    return <StyledCommentCount>{comments} Comments</StyledCommentCount>;
  }
}

export default CommentCount;
