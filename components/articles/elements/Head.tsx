import Link from 'next/link';
import { formatRelative, parseISO } from 'date-fns';
import { SFC, Fragment } from 'react';
import styled from 'styled-components';
import { ArticleTypes } from '../Types';
import { Props } from '../../styles/Themes';
import { FeaturedImage } from '../../FeaturedImage';

const StyledArticleHeader = styled.div``;

const StyledArticleHeaderInfo = styled.div`
  background: ${(props: Props) => props.theme.colors.red};
  padding: 20px;
  margin: 0;
  color: ${(props: Props) => props.theme.colors.white};
`;

const StyledHeading = styled.h2`
  font-family: 'Oswald';
  font-size: 2em;
  font-weight: 100;
  margin: 5px 0;
`;

const StyledPublishDate = styled.p`
  margin: 0;
`;

const ArticleHead: SFC<ArticleTypes> = ({ article }) => (
  <StyledArticleHeader>
    {article.featured_image && (
      <FeaturedImage
        image={article.featured_image}
        width={1000}
        alt={article.title}
        border
        max_height={300}
      />
    )}
    <StyledArticleHeaderInfo>
      <StyledPublishDate>
        Published: {formatRelative(parseISO(article.created_at), new Date())}
      </StyledPublishDate>
      <StyledHeading>{article.title}</StyledHeading>
    </StyledArticleHeaderInfo>
  </StyledArticleHeader>
);

export { ArticleHead };
