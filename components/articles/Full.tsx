import hljs from 'highlight.js';
import { NextSeo } from 'next-seo';
import { SFC, useEffect, Fragment } from 'react';
import Router from 'next/router';
import { ArticleHead } from './elements/Head';
import { ArticleTypes } from './Types';
import { ImageURL } from '../../utils/functions';
import { SEPARATOR, SITE_TITLE } from '../../config';
import { StyledArticle } from '../../styles/Articles';
import { ArticleBody } from './elements/Body';
import { CommentThread } from '../CommentThread';

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

  return (
    <Fragment>
      <NextSeo
        title={`${SITE_TITLE}${SEPARATOR}Post${SEPARATOR}${article.title}`}
        description={article.seo_description}
        openGraph={{
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
              url: `${ImageURL(article.featured_image.public_id)}.jpg`,
            },
          ],
        }}
      />
      <StyledArticle>
        {header && <ArticleHead article={article} />}
        <ArticleBody>{children}</ArticleBody>

        {commentsEnabled && <CommentThread item={article} slug="post" />}
      </StyledArticle>
    </Fragment>
  );
};

export { FullArticle };
