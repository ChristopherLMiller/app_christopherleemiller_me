import hljs from "highlight.js";
import { NextSeo, BlogJsonLd } from "next-seo";
import { FunctionComponent, useEffect, Fragment, useState } from "react";
import { ArticleHead } from "components/articles/elements/Head";
import { imageURL, truncate } from "utils/functions";
import { SEPARATOR } from "config";
import { StyledArticle } from "styles/Articles";
import { CommentThread } from "components/CommentThread";
import { StyledContentBlock } from "components/elements/ContentBlock";
import Link from "next/link";
import styled from "styled-components";
import { ModalBox } from "components/elements/Modal";
import { iArticle } from "utils/queries/articles";
import { Router } from "next/router";

const ArticleOptions = styled.div``;

const ArticleOptionsItem = styled.span``;

interface iFullArticle {
  commentsEnabled?: boolean;
  header?: boolean;
}

type iArticleFull = iFullArticle & iArticle;

const FullArticle: FunctionComponent<iArticleFull> = ({
  article,
  children,
  commentsEnabled = true,
  header = true,
}) => {
  // state for the modal box to confirm deletion
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    function initHighlighting() {
      hljs.initHighlighting();
    }
    Router.events.on(`routeChangeComplete`, initHighlighting);
    initHighlighting();

    return function cleanup() {
      Router.events.off(`routeChangeComplete`, initHighlighting);
    };
  });

  const openGraph = {
    title: `Post${SEPARATOR}${article.title}`,
    description: truncate(article.content, 3),
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/post/${article.slug}`,
    type: `article`,
    article: {
      authors: [article.user.username],
      modifiedTime: article.updated_at,
      publishedTime: article.created_at,
    },
    images: [
      {
        alt: article.title,
        url: `${imageURL(
          article?.featured_image?.provider_metadata?.public_id,
          { c: "scale", w: 1200 },
          1250,
          "png"
        )}`,
      },
    ],
  };

  // append tags if there are any
  if (article.tags) {
    // @ts-ignore
    openGraph.article.tags = article.tags.map((tag) => tag.title);
  }

  return (
    <Fragment>
      <NextSeo
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/blog/post/${article.slug}`}
        title={`Post${SEPARATOR}${article.title}`}
        description={truncate(article.content, 3)}
        openGraph={openGraph}
      />
      <BlogJsonLd
        url={`${process.env.NEXT_PUBLIC_SITE_URL}/blog/post/${article.slug}`}
        title={article.title}
        images={[
          `${imageURL(
            article?.featured_image?.provider_metadata?.public_id
          )}.jpg`,
        ]}
        datePublished={article.created_at}
        dateModified={article.updated_at}
        authorName={article.user.username}
        description={truncate(article.content, 3)}
      />
      <StyledArticle>
        {header && <ArticleHead article={article} />}
        <StyledContentBlock>
          {children}
          {false && (
            <ArticleOptions>
              <ArticleOptionsItem>
                <Link
                  href={`/admin/articles/edit/${article.id}`}
                  as={`/admin/articles/edit/${article.id}`}
                ></Link>
              </ArticleOptionsItem>
              <ArticleOptionsItem></ArticleOptionsItem>
            </ArticleOptions>
          )}
        </StyledContentBlock>
        {commentsEnabled && <CommentThread item={article} slug="post" />}
      </StyledArticle>
      <ModalBox
        title="Confirm Deletion"
        isOpen={isModalOpen}
        onRequestClose={() => setModalOpen(false)}
      >
        <p>Are you sure you want to delete this article?</p>
      </ModalBox>
    </Fragment>
  );
};

export { FullArticle };
