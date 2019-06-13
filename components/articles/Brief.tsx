import hljs from 'highlight.js';
import { SFC, useEffect } from 'react';
import Router from 'next/router';
import { ArticleTypes } from './Types';
import { ArticleFooter } from './elements/Footer';
import { ArticleHead } from './elements/Head';
import { CommentCount } from './CommentCount';
// import 'highlight.js/styles/atom-one-dark.css';
import { StyledArticle } from '../../styles/Articles';
import { ArticleBody } from './elements/Body';
import { Button } from '../Buttons';

const BriefArticle: SFC<ArticleTypes> = ({ article, children }) => {
  useEffect(() => {
    function initHighlighting() {
      hljs.initHighlighting();
    }
    Router.events.on(`routeChangeComplete`, initHighlighting);

    return function cleanup() {
      Router.events.off(`routeChangeComplete`, initHighlighting);
    };
  });

  return (
    <StyledArticle>
      <ArticleHead article={article} />
      <ArticleBody>
        {children}
        <CommentCount article={article} />
      </ArticleBody>
      <Button
        as={`/post/${article.slug}`}
        href={`/post?slug=${article.slug}`}
        text="Read More"
      />
      <ArticleFooter article={article} />
    </StyledArticle>
  );
};

export { BriefArticle };
