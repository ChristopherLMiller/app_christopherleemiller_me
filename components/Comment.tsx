import React, { SFC } from 'react';
import styled from 'styled-components';
import { formatRelative, parseISO } from 'date-fns';
import { ImageURL } from '../utils/functions';
import { Props } from './styles/THemes';

const CommentWrapper = styled.li`
  border-bottom: 1px solid black;
  display: flex;
  padding: 10px;
  color: ${(props: Props) => props.theme.colors.grey_darkest};
`;
const CommentImage = styled.img`
  border: 2px solid ${(props: Props) => props.theme.colors.white};
  max-height: fit-content;
`;
const CommentText = styled.div`
  display: block;
  padding: 0 20px 0 20px;
`;
const CommentTopLine = styled.p`
  display: block;
  letter-spacing: 1px;
  margin: 0;
`;

const CommentName = styled.span`
  color: ${(props: Props) => props.theme.colors.red};
  text-transform: uppercase;
  font-size: 1.5em;
`;

const CommentDate = styled.span`
  font-size: 1.15em;
  padding-left: 10px;
`;

const CommentBottomLine = styled.p`
  margin: 0;
  font-size: 1.15em;
`;

interface CommentProps {
  comment: {
    created_at: string,
    comment: string,
    user: {
      username: string,
    },
  }
}

const Comment: SFC<CommentProps> = ({ comment }) => (
  <CommentWrapper>
    <CommentImage src={ImageURL('assets/avatar_default', 50)} />
    <CommentText>
      <CommentTopLine>
        <CommentName>{comment.user.username}</CommentName>
        <CommentDate>{formatRelative(
          parseISO(comment.created_at),
          new Date()
        )}</CommentDate>
      </CommentTopLine>
      <CommentBottomLine>{comment.comment}</CommentBottomLine>
    </CommentText>
  </CommentWrapper>
);

export { Comment };
