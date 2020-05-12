import { FunctionComponent } from "react";

import { ArticleFooter } from "components/articles/elements/Footer";
import { ArticleHead } from "components/articles/elements/Head";
import { StyledArticle } from "styles/Articles";
import { StyledContentBlock } from "components/elements/ContentBlock";
import { Button } from "components/inputs/Buttons";
import { iArticle } from "utils/queries/articles";

const BriefArticle: FunctionComponent<iArticle> = ({ article, children }) => (
  <StyledArticle>
    <ArticleHead article={article} />
    <StyledContentBlock>{children}</StyledContentBlock>
    <Button
      as={`/blog/post/${article.slug}`}
      href={`/blog/post/[slug]`}
      text="Read More"
    />
    <ArticleFooter article={article} />
  </StyledArticle>
);

export { BriefArticle };
