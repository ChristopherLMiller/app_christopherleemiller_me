import propTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import formatRelative from 'date-fns/formatRelative';
import parseISO from 'date-fns/parseISO';

const CommentWrapper = styled.li`
  border-bottom: 1px solid black;
  display: flex;
  padding: 10px;
  color: ${props => props.theme.grey_darkest};
`;
const CommentImage = styled.img`
  border: 2px solid ${props => props.theme.white};
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
  color: ${props => props.theme.red};
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

class Comment extends React.Component {
  static propTypes = {
    comment: propTypes.object.isRequired,
  };

  render() {
    let formattedDate = '';
    if (this.props.comment.createdAt) {
      formattedDate = formatRelative(
        parseISO(this.props.comment.createdAt),
        new Date()
      );
    }

    return (
      <CommentWrapper>
        <CommentImage src="https://res.cloudinary.com/christopherleemiller/image/upload/c_scale,w_50/v1544466783/clm_me/assets/logo.png" />
        <CommentText>
          <CommentTopLine>
            <CommentName>{this.props.comment.user.username}</CommentName>
            <CommentDate>{formattedDate}</CommentDate>
          </CommentTopLine>
          <CommentBottomLine>{this.props.comment.text}</CommentBottomLine>
        </CommentText>
      </CommentWrapper>
    );
  }
}

export default Comment;
