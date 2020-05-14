import { FunctionComponent } from "react";
import styled from "styled-components";
import Disqus from "disqus-react";
import { DISQUS_SHORTNAME } from "config";

const StyledCommentCount = styled.p`
  text-align: right;
`;

interface CommentType {
  article: {
    slug: string;
    title: string;
  };
  slug: string;
}

const CommentCount: FunctionComponent<CommentType> = ({ article, slug }) => {
  const disqusConfig = {
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/${slug}/${article.slug}`,
    identifier: article.slug,
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
