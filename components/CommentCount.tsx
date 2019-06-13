import React, { SFC } from 'react';
import styled from 'styled-components';
import Disqus from 'disqus-react';
import { DISQUS_SHORTNAME } from '../config';

const StyledCommentCount = styled.p`
  text-align: right;
`;

interface CommentType {
  article: {
    slug: string;
    id: string;
    title: string;
  };
  slug: string;
}

const CommentCount: SFC<CommentType> = ({ article, slug }) => {
  const disqusConfig = {
    url: `${process.env.SITE_URL}/${slug}/${article.slug}`,
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
