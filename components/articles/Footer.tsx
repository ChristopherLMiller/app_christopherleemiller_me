import { SFC } from 'react';
import Categories from './Categories';
import Tags from './Tags';
import { StyledArticleFooter } from '../styles/Articles';
import ArticleTypes from './Types';

const ArticleFooter: SFC<ArticleTypes> = ({ article }) => (
  <StyledArticleFooter >
    <Categories categories={article.categories} />
    <Tags tags={article.tags} />
  </StyledArticleFooter>
)
export default ArticleFooter;