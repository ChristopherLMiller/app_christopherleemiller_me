import Categories from './Categories';
import CommentCount from './CommentCount';
import { formatRelative, parseISO } from 'date-fns';
import hljs from 'highlight.js';
import Link from 'next/link';
import Tags from './Tags';
import { SFC, useEffect } from 'react';
import {
  StyledArticle,
  StyledArticleBody,
  StyledArticleHeader,
  StyledArticleHeaderImage,
  StyledArticleHeaderInfo,
  StyledArticleFooter,
  StyledReadMore,
} from '../styles/Articles';

interface BriefArticleProps {
  article: {
    featured_image: string,
    title: string,
    createdAt: string,
    user: {
      username: string
    },
    comments: Array<object>,
    slug: string
    categories: Array<object>,
    tags: Array<object>
  },
  children: object
}

const BriefArticle: SFC<BriefArticleProps> = ({ article, children }) => {
  useEffect(() => {
    hljs.initHighlighting();
  });

  return (
    <StyledArticle>
      <StyledArticleHeader>
        {
          article.featured_image && (
            <StyledArticleHeaderImage
              src={article.featured_image}
              alt={
                article.title
              }
            />
          )}
        <StyledArticleHeaderInfo>
          <h2>{article.title} </h2>
          {
            article.createdAt && (
              <p>
                Published{' '}
                {formatRelative(parseISO(article.createdAt), new Date())} by{' '}
                {article.user.username}
              </p>
            )
          }
        </StyledArticleHeaderInfo>
      </StyledArticleHeader>
      <StyledArticleBody>
        {children}
        < CommentCount comments={article.comments} />
        <StyledReadMore>
          <Link
            as={`/post/${article.slug}`}
            href={`/post?slug=${article.slug}`}
          >
            <a>Read More </a>
          </Link>
        </StyledReadMore>
      </StyledArticleBody>
      <StyledArticleFooter >
        <Categories categories={article.categories} />
        <Tags tags={article.tags} />
      </StyledArticleFooter>
    </StyledArticle>
  );
};


export default BriefArticle;
