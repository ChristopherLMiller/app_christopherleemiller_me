import { FunctionComponent } from "react";
import styled from "styled-components";
import Disqus from "disqus-react";
import { DISQUS_SHORTNAME } from "config";

const ItemComments = styled.div`
  background: var(--background-darker);
  padding: 40px;
`;

interface CommentType {
  item: {
    slug: string;
    title: string;
    id: string;
  };
  slug: string;
}

const CommentThread: FunctionComponent<CommentType> = ({ item, slug }) => {
  const disqusConfig = {
    identifier: `${item.slug}+${item.id}`,
    title: item.title,
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/${slug}/${item.slug}`,
  };
  return (
    <ItemComments>
      <Disqus.DiscussionEmbed
        shortname={DISQUS_SHORTNAME}
        config={disqusConfig}
      />
    </ItemComments>
  );
};
export { CommentThread };
