import hljs from 'highlight.js';
import { SFC, useEffect } from 'react';
import { ArticleTypes } from './Types';
import { ArticleFooter } from './elements/Footer';
import { ArticleHead } from './elements/Head';
import { CommentCount } from './CommentCount';
// import 'highlight.js/styles/atom-one-dark.css';
import { StyledArticle } from '../styles/Articles';
import { ArticleBody } from './elements/Body';
import { Button } from '../Buttons';

const BriefArticle: SFC<ArticleTypes> = ({ article, children }) => {
  useEffect(() => {
    hljs.initHighlighting();
  });

  return (
    <StyledArticle>
      <ArticleHead article={article} />
      <ArticleBody>
        {children}
        <CommentCount comments={article.comments} />
        <Button
          as={`/post/${article.slug}`}
          href={`/post?slug=${article.slug}`}
          text="Read More"
        />
      </ArticleBody>
      <ArticleFooter article={article} />
    </StyledArticle>
  );
};

export { BriefArticle };
