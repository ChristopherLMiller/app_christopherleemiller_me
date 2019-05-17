import Link from 'next/link';
import { formatRelative, parseISO } from 'date-fns';
import { SFC, Fragment } from 'react';
import { ArticleTypes } from './Types';
import { ImageURL } from '../../utils/functions';
import {
  StyledArticleHeader,
  StyledArticleHeaderImage,
  StyledArticleHeaderInfo,
} from '../styles/Articles';

const ArticleHead: SFC<ArticleTypes> = ({ article }) => (
  <StyledArticleHeader>
    {article.featured_image && (
      <StyledArticleHeaderImage
        src={ImageURL(article.featured_image, 1000)}
        alt={article.title}
      />
    )}
    <StyledArticleHeaderInfo>
      <h2>
        <Link as={`/post/${article.slug}`} href={`/post?slug=${article.slug}`}>
          <a>{article.title}</a>
        </Link>
      </h2>
      {article.created_at && (
        <Fragment>
          <p>
            Published {formatRelative(parseISO(article.created_at), new Date())}
            {` `}
            by {article.user.username}
          </p>
          {article.created_at != article.updated_at && (
            <p>
              Revised {formatRelative(parseISO(article.updated_at), new Date())}
            </p>
          )}
        </Fragment>
      )}
    </StyledArticleHeaderInfo>
  </StyledArticleHeader>
);

export { ArticleHead };
