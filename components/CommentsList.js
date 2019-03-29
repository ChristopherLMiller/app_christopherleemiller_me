import React from 'react';
import styled from 'styled-components';

import Comment from './Comment';

const StyledCommentSection = styled.div`
  background: ${props => props.theme.grey};
  max-width: ${props => props.theme.max_width};
  margin: 0 auto;
`;
const StyledCommentHeader = styled.h3`
  background: ${props => props.theme.red};
  padding: 20px;
  margin: 0;
  color: ${props => props.theme.grey};
  text-transform: uppercase;
  font-family: Monospace;
  letter-spacing: 5px;
  font-size: 1.5em;
`;
const StyledCommentContent = styled.ul`
  padding-left: 0;
  list-style-type: none;
  margin: 0;
`;

const StyledCommentSignIn = styled.p`
  font-size: 2em;
  text-align: center;
  margin: 0;
  color: ${props => props.theme.red};
  text-transform: uppercase;
  padding: 15px;
`;

class CommentsList extends React.Component {
  render() {
    return (
      <StyledCommentSection>
        <StyledCommentHeader>Comments</StyledCommentHeader>
        <StyledCommentContent>
          {this.props.comments.map(comment => (
            <Comment comment={comment} />
          ))}
          <StyledCommentSignIn>
            To Add a Comment Please Sign In
          </StyledCommentSignIn>
        </StyledCommentContent>
      </StyledCommentSection>
    );
  }
}

export default CommentsList;
