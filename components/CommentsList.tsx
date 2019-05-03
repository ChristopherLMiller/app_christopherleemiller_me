import React, { SFC } from 'react';
import styled from 'styled-components';
import { Comment } from './Comment';
import { Props } from './styles/Themes';

const StyledCommentSection = styled.div`
  background: ${(props: Props) => props.theme.colors.grey};
  max-width: ${(props: Props) => props.theme.max_width};
  margin: 0 auto;
  padding: 0;
`;
const StyledCommentHeader = styled.h3`
  background: ${(props: Props) => props.theme.colors.red};
  padding: 20px;
  margin: 0;
  color: ${(props: Props) => props.theme.colors.grey};
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
  color: ${(props: Props) => props.theme.colors.red};
  text-transform: uppercase;
  padding: 15px;
`;

interface CommentsListProps {
  comments: Array<Object>;
}

const CommentsList: SFC<CommentsListProps> = ({ comments }) => (
  <StyledCommentSection>
    <StyledCommentHeader>Comments</StyledCommentHeader>
    <StyledCommentContent>
      {comments.map(comment => (
        <Comment comment={comment} />
      ))}
      <StyledCommentSignIn>To Add a Comment Please Sign In</StyledCommentSignIn>
    </StyledCommentContent>
  </StyledCommentSection>
);

export { CommentsList };
