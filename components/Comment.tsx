import React, { SFC } from 'react';
import styled from 'styled-components';
import { formatRelative, parseISO } from 'date-fns';
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
    createdAt: string,
    text: string,
    user: {
      username: string,
    },
  }
}

const Comment: SFC<CommentProps> = ({ comment }) => (
  <CommentWrapper>
    <CommentImage src="https://res.cloudinary.com/christopherleemiller/image/upload/c_scale,w_50/v1544466783/clm_me/assets/logo.png" />
    <CommentText>
      <CommentTopLine>
        <CommentName>{comment.user.username}</CommentName>
        <CommentDate>{formatRelative(
          parseISO(comment.createdAt),
          new Date()
        )}</CommentDate>
      </CommentTopLine>
      <CommentBottomLine>{comment.text}</CommentBottomLine>
    </CommentText>
  </CommentWrapper>
);

export default Comment;
