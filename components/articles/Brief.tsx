import hljs from 'highlight.js';
import Link from 'next/link';
import { SFC, useEffect } from 'react';
import { ArticleTypes } from './Types';
import { ArticleFooter } from './Footer';
import { ArticleHead } from './Head';
import { CommentCount } from './CommentCount';
// import 'highlight.js/styles/atom-one-dark.css';
import {
  StyledArticle,
  StyledArticleBody,
  StyledReadMore,
} from '../styles/Articles';

const BriefArticle: SFC<ArticleTypes> = ({ article, children }) => {
  useEffect(() => {
    hljs.initHighlighting();
  });

  return (
    <StyledArticle>
      <ArticleHead article={article} />
      <StyledArticleBody>
        {children}
        <CommentCount comments={article.comments} />
        <StyledReadMore>
          <Link
            as={`/post/${article.slug}`}
            href={`/post?slug=${article.slug}`}
          >
            <a>Read More </a>
          </Link>
        </StyledReadMore>
      </StyledArticleBody>
      <ArticleFooter article={article} />
    </StyledArticle>
  );
};

export { BriefArticle };
