import Link from "next/link";
import { FunctionComponent } from "react";
import styled from "styled-components";
import { iTags } from "utils/queries/tags";

const TagsWrapper = styled.div`
  font-family: var(--font-monospace);
  font-size: 1.75rem;
`;

const TagsLink = styled.span`
  text-transform: uppercase;
`;

const Splitter = styled.div`
  color: var(--main-color);
  padding: 0 5px;
  display: inline-block;
`;

const Tags: FunctionComponent<iTags> = ({ tags }) => (
  <TagsWrapper>
    <span>Tags: </span>
    {tags.map((tag, index) => (
      <TagsLink key={tag.id}>
        {!!index && <Splitter>|</Splitter>}
        <Link href={`/blog?tag=${tag.slug}`} as={`/blog?tag=${tag.slug}`}>
          <a>{tag.title}</a>
        </Link>
      </TagsLink>
    ))}
    {tags.length < 1 && <span>None</span>}
  </TagsWrapper>
);

export { Tags };
