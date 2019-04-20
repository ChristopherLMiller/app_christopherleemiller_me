import ArticleTypes from './Types';
import Link from 'next/link';
import { formatRelative, parseISO } from 'date-fns';
import { ImageURL } from '../../utils/functions';
import { SFC } from 'react';
import { StyledArticleHeader, StyledArticleHeaderImage, StyledArticleHeaderInfo } from '../styles/Articles';

const ArticleHead: SFC<ArticleTypes> = ({ article }) => (
  <StyledArticleHeader>
    {
      article.featured_image && (
        <StyledArticleHeaderImage
          src={ImageURL(article.featured_image, 1000)}
          alt={
            article.title
          }
        />
      )}
    <StyledArticleHeaderInfo>
      <h2>
        <Link
          as={`/post/${article.slug}`}
          href={`/post?slug=${article.slug}`}
        >
          <a>{article.title}</a>
        </Link></h2>
      {
        article.created_at && (
          <p>
            Published{' '}
            {formatRelative(parseISO(article.created_at), new Date())} by{' '}{article.user.username}
          </p>
        )
      }
    </StyledArticleHeaderInfo>
  </StyledArticleHeader>
)

export default ArticleHead;