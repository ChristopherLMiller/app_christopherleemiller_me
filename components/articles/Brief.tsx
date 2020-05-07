import { FunctionComponent } from "react";

import { ArticleFooter } from "./elements/Footer";
import { ArticleHead } from "./elements/Head";
import { StyledArticle } from "../../styles/Articles";
import { StyledContentBlock } from "../elements/ContentBlock";
import { Button } from "../inputs/Buttons";
import { iArticle } from "../../utils/queries/articles";

const BriefArticle: FunctionComponent<iArticle> = ({ article, children }) => (
  <StyledArticle>
    <ArticleHead article={article} />
    <StyledContentBlock>{children}</StyledContentBlock>
    <Button
      as={`/post/${article.slug}`}
      href={`/post/[slug]`}
      text="Read More"
    />
    <ArticleFooter article={article} />
  </StyledArticle>
);

export { BriefArticle };
