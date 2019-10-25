import hljs from 'highlight.js';
import { NextSeo, BlogJsonLd } from 'next-seo';
import { SFC, useEffect, Fragment } from 'react';
import Router from 'next/router';
import { ArticleHead } from './elements/Head';
import { ArticleTypes } from './Types';
import { ImageURL } from '../../utils/functions/imageURL';
import { SITE_DEFAULT_IMAGE_FILE, SEPARATOR } from '../../config';
import { StyledArticle } from '../../styles/Articles';
import { CommentThread } from '../CommentThread';
import { StyledContentBlock } from '../elements/ContentBlock';

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

  const image = article.featured_image
    ? article.featured_image.public_id
    : SITE_DEFAULT_IMAGE_FILE;

  const tags = article.tags.map(tag => tag.title);

  return (
    <Fragment>
      <NextSeo
        canonical={`${process.env.SITE_URL}/post/${article.slug}`}
        title={`Post${SEPARATOR}${article.title}`}
        description={article.seo_description}
        openGraph={{
          title: `Post${SEPARATOR}${article.title}`,
          description: article.seo_description,
          url: `${process.env.SITE_URL}/post/${article.slug}`,
          type: `article`,
          article: {
            authors: [article.user.username],
            modifiedTime: article.updated_at,
            publishedTime: article.created_at,
            tags: tags.length > 0 ? tags : undefined,
          },
          images: [
            {
              alt: article.title,
              url: `${ImageURL(image)}.jpg`,
            },
          ],
        }}
      />
      <BlogJsonLd
        url={`${process.env.SITE_URL}/post/${article.slug}`}
        title={article.title}
        images={[`${ImageURL(image)}.jpg`]}
        datePublished={article.created_at}
        dateModified={article.updated_at}
        authorName={article.user.username}
        description={article.seo_description}
      />
      <StyledArticle>
        {header && <ArticleHead article={article} />}
        <StyledContentBlock>{children}</StyledContentBlock>
        {commentsEnabled && <CommentThread item={article} slug="post" />}
      </StyledArticle>
    </Fragment>
  );
};

export { FullArticle };
