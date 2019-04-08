import ArticleHead from './Head';
import ArticleTypes from './Types';
import CommentsList from '../CommentsList';
import hljs from 'highlight.js/';
import NextSEO from 'next-seo';
import {
  separator,
  siteDefaultImage,
  siteTitle,
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
      {console.log(article)}
      <NextSEO
        config={{
          title: `${siteTitle}${separator}Post${separator}${article.title}`,
          description: article.seo_description,
          openGraph: {
            title: `${siteTitle}${separator}Post${separator}${article.title}`,
            description: article.seo_description,
            url: `${process.env.SITE_URL}/post/${article.slug}`,
            type: 'article',
            article: {
              publishedTime: article.createdAt,
              modifiedTime: article.updatedAt,
              authors: [
                article.user.username,
              ]
            },
            images: [
              {
                url: article.featured_image || siteDefaultImage,
                alt: article.title
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
