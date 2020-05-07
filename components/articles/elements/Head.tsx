import { formatRelative, parseISO } from "date-fns";
import { FunctionComponent } from "react";
import styled from "styled-components";
import { Image } from "../../elements";
import { countWords, timeToRead } from "../../../utils/functions";
import { iArticle } from "../../../utils/queries/articles";

const StyledArticleHeader = styled.div`
  font-family: var(--font-family);
  font-weight: 100;

  img {
    width: 100%;
  }
`;

const StyledArticleHeaderInfo = styled.div`
  background: var(--main-color);
  padding: 20px 40px;
  margin: 0;
  color: var(--text-color-light);
`;

const StyledHeading = styled.h2`
  font-size: 3rem;
  margin: 5px 0;
  font-weight: 200;
`;

const StyledPublishDate = styled.p`
  margin: 0;
`;

const ArticleHead: FunctionComponent<iArticle> = ({ article }) => (
  <StyledArticleHeader>
    {article.featured_image && (
      <Image
        file={article?.featured_image?.provider_metadata?.public_id}
        options={{
          width: 1000,
          crop: "scale",
          border: "10px_solid_rgb:FFFFFF",
        }}
        alt={article?.featured_image?.alternativeText}
      />
    )}
    <StyledArticleHeaderInfo>
      <StyledPublishDate>
        Published: {formatRelative(parseISO(article.created_at), new Date())} |
        Time to Read: {timeToRead(countWords(article.content))}
      </StyledPublishDate>
      <StyledHeading>{article.title}</StyledHeading>
    </StyledArticleHeaderInfo>
  </StyledArticleHeader>
);

export { ArticleHead };
