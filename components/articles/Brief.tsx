import { SFC } from 'react';
import { ArticleTypes } from './Types';
import { ArticleFooter } from './elements/Footer';
import { ArticleHead } from './elements/Head';
import { CommentCount } from '../CommentCount';
import { StyledArticle } from '../../styles/Articles';
import { StyledContentBlock } from '../elements/ContentBlock';
import { Button } from '../Buttons';

const BriefArticle: SFC<ArticleTypes> = ({ article, children }) => (
  <StyledArticle>
    <ArticleHead article={article} />
    <StyledContentBlock>
      {children}
      <CommentCount article={article} slug="post" />
    </StyledContentBlock>
    <Button
      as={`/post/${article.slug}`}
      href={`/post?slug=${article.slug}`}
      text="Read More"
    />
    <ArticleFooter article={article} />
  </StyledArticle>
);

export { BriefArticle };
