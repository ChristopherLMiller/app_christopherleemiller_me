import ArticleHead from './Head';
import ArticleTypes from './Types';
import CommentsList from '../CommentsList';
import hljs from 'highlight.js/';
import NextSEO from 'next-seo';
import {
  separator,
  siteDefaultImage,
  siteTitle,
  siteURL
} from '../../config';
import { SFC, useEffect } from 'react';
// import 'highlight.js/styles/atom-one-dark.css';
import {
  StyledArticle,
  StyledArticleBody,
} from '../styles/Articles';

const FullArticle: SFC<ArticleTypes> = ({ article, children, commentsEnabled = true }) => {
  useEffect(() => {
    hljs.initHighlighting();
  });

  return (
    <>
      <NextSEO
        config={{
          title: `${siteTitle}${separator}${article.title}`,
          description: article.content_brief,
          openGraph: {
            title: `${siteTitle}${separator}${article.title}`,
            description: article.content_brief,
            url: `${siteURL}/post/${article.slug}`,
            images: [
              {
                url: article.featured_image || siteDefaultImage,
              },
            ],
          },
        }}
      />
      <StyledArticle>
        <ArticleHead article={article} />
        <StyledArticleBody>{children}</StyledArticleBody>
      </StyledArticle>

      {commentsEnabled && (
        <CommentsList comments={article.comments} />
      )}
    </>
  );
};

export default FullArticle;
