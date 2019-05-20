import { SFC } from 'react';
import styled from 'styled-components';
import { ArticleTypes } from '../Types';
import { Tags } from '../Tags';
import { Categories } from '../Categories';
import { Props } from '../../styles/Themes';

const StyledArticleFooter = styled.div`
  background: ${(props: Props) => props.theme.colors.grey_darker};
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
