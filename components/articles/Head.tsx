import ArticleTypes from './Types';
import { formatRelative, parseISO } from 'date-fns';
import { SFC } from 'react';
import { StyledArticleHeader, StyledArticleHeaderImage, StyledArticleHeaderInfo } from '../styles/Articles';
import { ImageURL } from '../../utils/functions';

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
      <h2>{article.title} </h2>
      {
        article.createdAt && (
          <p>
            Published{' '}
            {formatRelative(parseISO(article.createdAt), new Date())} by{' '}{article.user.username}
          </p>
        )
      }
    </StyledArticleHeaderInfo>
  </StyledArticleHeader>
)

export default ArticleHead;