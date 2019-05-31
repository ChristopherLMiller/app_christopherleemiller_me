import hljs from 'highlight.js/';
import NextSEO from 'next-seo';
import { SFC, useEffect, Fragment } from 'react';
import { ArticleHead } from './elements/Head';
import { ArticleTypes } from './Types';
import { CommentsList } from '../CommentsList';
import { ImageURL } from '../../utils/functions';
import { SEPARATOR, SITE_TITLE } from '../../config';
// Next line is commented out till next-css is fixed
// import 'highlight.js/styles/atom-one-dark.css';
import { StyledArticle } from '../styles/Articles';
import { ArticleBody } from './elements/Body';
import Sidebar from '../layout/Sidebar';

const FullArticle: SFC<ArticleTypes> = ({
  article,
  children,
  commentsEnabled = true,
  header = true,
}) => {
  useEffect(() => {
    hljs.initHighlighting();
  });

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
      </StyledArticle>

      {commentsEnabled && <CommentsList comments={article.comments} />}
    </Fragment>
  );
};

export { FullArticle };
