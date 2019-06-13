import React, { SFC } from 'react';
import styled from 'styled-components';
import Disqus from 'disqus-react';
import { DISQUS_SHORTNAME } from '../../config';
import ArticleTypes from './Types';

const StyledCommentCount = styled.p`
  text-align: right;
`;

const CommentCount: SFC<ArticleTypes> = article => {
  const disqusConfig = {
    url: `${process.env.SITE_URL}/post/${article.slug}`,
    identifier: article.id,
    title: article.title,
  };
  return (
    <StyledCommentCount>
      <Disqus.CommentCount shortname={DISQUS_SHORTNAME} config={disqusConfig}>
        Comments
      </Disqus.CommentCount>
    </StyledCommentCount>
  );
};
export { CommentCount };
