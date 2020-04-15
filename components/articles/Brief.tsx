import { FunctionComponent } from 'react';
import { ArticleTypes } from './Types';
import { ArticleFooter } from './elements/Footer';
import { ArticleHead } from './elements/Head';
import { StyledArticle } from '../../styles/Articles';
import { StyledContentBlock } from '../elements/ContentBlock';
import { Button } from '../Buttons';

const BriefArticle: FunctionComponent<ArticleTypes> = ({ article, children }) => (
  <StyledArticle>
    <ArticleHead article={article} />
    <StyledContentBlock>
      {children}
    </StyledContentBlock>
    <Button
      as={`/post/${article.slug}`}
      href={`/post/[slug]`}
      text="Read More"
    />
    <ArticleFooter article={article} />
  </StyledArticle>
);

export { BriefArticle };
