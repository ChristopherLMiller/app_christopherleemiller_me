import React, { SFC } from 'react';
import styled from 'styled-components';
import { CommentsType } from './Types';

const StyledCommentCount = styled.p`
  text-align: right;
`;

const CommentCount: SFC<CommentsType> = ({ comments }) => (
  <StyledCommentCount>{comments.length || 0} Comments</StyledCommentCount>
)

export { CommentCount };
