import { SFC } from 'react';
import styled from 'styled-components';
import { ArticleTypes } from '../Types';
import { Tags } from '../Tags';
import { Categories } from '../Categories';

const StyledArticleFooter = styled.div`
  background: var(--background-dark);
  padding: 20px;
  margin: 0;
`;

const ArticleFooter: SFC<ArticleTypes> = ({ article }) => (
  <StyledArticleFooter>
    <Categories categories={article.categories} />
    <Tags tags={article.tags} />
  </StyledArticleFooter>
);
export { ArticleFooter };
