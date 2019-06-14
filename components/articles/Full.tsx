import hljs from 'highlight.js/';
import NextSEO from 'next-seo';
import { SFC, useEffect, Fragment } from 'react';
import Disqus from 'disqus-react';
import styled from 'styled-components';
import Router from 'next/router';
import { ArticleHead } from './elements/Head';
import { ArticleTypes } from './Types';
import { ImageURL } from '../../utils/functions';
import { SEPARATOR, SITE_TITLE, DISQUS_SHORTNAME } from '../../config';
import { StyledArticle } from '../../styles/Articles';
import { ArticleBody } from './elements/Body';

const CommentContent = styled.div`
  padding: 40px;
  background: var(--background-dark);
`;
const FullArticle: SFC<ArticleTypes> = ({
  article,
  children,
  commentsEnabled = true,
  header = true,
}) => {
  useEffect(() => {
    function initHighlighting() {
      hljs.initHighlighting();
    }
    Router.events.on(`routeChangeComplete`, initHighlighting);
    initHighlighting();

    return function cleanup() {
      Router.events.off(`routeChangeComplete`, initHighlighting);
    };
  });

  const disqusConfig = {
    url: `${process.env.SITE_URL}/post/${article.slug}`,
    identifier: article.slug,
    title: article.title,
  };

  return (
    <Fragment>
      <NextSEO
        config={{
          title: `${SITE_TITLE}${SEPARATOR}Post${SEPARATOR}${article.title}`,
          description: article.seo_description,
          openGraph: {
            title: `${SITE_TITLE}${SEPARATOR}Post${SEPARATOR}${article.title}`,
            description: article.seo_description,
            url: `${process.env.SITE_URL}/post/${article.slug}`,
            type: `article`,
            article: {
              authors: [article.user.username],
              modifiedTime: article.updated_at,
              publishedTime: article.created_at,
            },
            images: [
              {
                alt: article.title,
                url: `${ImageURL(article.featured_image)}.jpg`,
              },
            ],
          },
        }}
      />
      <StyledArticle>
        {header && <ArticleHead article={article} />}
        <ArticleBody>{children}</ArticleBody>

        {commentsEnabled && (
          <CommentContent>
            <Disqus.DiscussionEmbed
              shortname={DISQUS_SHORTNAME}
              config={disqusConfig}
            />
          </CommentContent>
        )}
      </StyledArticle>
    </Fragment>
  );
};

export { FullArticle };
