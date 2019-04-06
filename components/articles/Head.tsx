import ArticleTypes from './Types';
import { formatRelative, parseISO } from 'date-fns';
import { SFC } from 'react';
import { StyledArticleHeader, StyledArticleHeaderImage, StyledArticleHeaderInfo } from '../styles/Articles';

const ArticleHead: SFC<ArticleTypes> = ({ article }) => (
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
)

export default ArticleHead;