import ReactMarkdown from "react-markdown";
import { Layout } from "components/layout/PageLayout";
import { iArticle } from "utils/queries/articles";
import { NextPage } from "next";
import { NextSeo, BlogJsonLd } from "next-seo";
import { ArticleHead } from "components/articles/elements/Head";
import { StyledArticle } from "styles/Articles";
import { CommentThread } from "components/CommentThread";
import { StyledContentBlock } from "components/elements/ContentBlock";
import Link from "next/link";
import { ModalBox } from "components/elements/Modal";
import styled from "styled-components";
import hljs from "highlight.js";
import { useEffect, useState } from "react";
import { Router } from "next/router";
import { imageURL, truncate, isDefined } from "utils/functions";
import { SEPARATOR } from "config";

const title = `From My Desk`;
const description = `Archives concerning all matters web development and beyond`;

const ArticleOptions = styled.div``;
const ArticleOptionsItem = styled.span``;

interface iPostPage {
  blog_post: iArticle["article"];
}

const PostPage: NextPage<iPostPage> = ({ blog_post }) => {
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

  // define SEO properties
  const openGraph = {
    title: `Post${SEPARATOR}${blog_post.title}`,
    description: truncate(blog_post.content, 3),
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/post/${blog_post.slug}`,
    type: `article`,
    article: {
      authors: [blog_post.user.username],
      modifiedTime: blog_post.updated_at,
      publishedTime: blog_post.created_at,
    },
    images: [
      {
        alt: blog_post.title,
        url: `${imageURL(
          blog_post?.featured_image?.provider_metadata?.public_id,
          { c: "scale", w: 1200 },
          1,
          "jpg"
        )}`,
      },
    ],
  };

  // append tags if there are any
  if (isDefined(blog_post?.tags)) {
    // @ts-ignore
    openGraph.article.tags = blog_post?.tags?.map((tag) => tag.title) || null;
  }
  return (
    <Layout meta={{ title: title, description: description, useSEO: false }}>
      <NextSeo
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/blog/post/${blog_post.slug}`}
        title={`Post${SEPARATOR}${blog_post.title}`}
        description={truncate(blog_post.content, 3)}
        openGraph={openGraph}
      />
      <BlogJsonLd
        url={`${process.env.NEXT_PUBLIC_SITE_URL}/blog/post/${blog_post.slug}`}
        title={blog_post.title}
        images={[
          `${imageURL(
            blog_post?.featured_image?.provider_metadata?.public_id
          )}.jpg`,
        ]}
        datePublished={blog_post.created_at}
        dateModified={blog_post.updated_at}
        authorName={blog_post.user.username}
        description={truncate(blog_post.content, 3)}
      />
      <StyledArticle>
        <ArticleHead article={blog_post} />
        <StyledContentBlock>
          <ReactMarkdown source={blog_post.content} escapeHtml={false} />
          {false && (
            <ArticleOptions>
              <ArticleOptionsItem>
                <Link
                  href={`/admin/articles/edit/${blog_post.id}`}
                  as={`/admin/articles/edit/${blog_post.id}`}
                ></Link>
              </ArticleOptionsItem>
              <ArticleOptionsItem></ArticleOptionsItem>
            </ArticleOptions>
          )}
        </StyledContentBlock>
        <CommentThread item={blog_post} slug="post" />
      </StyledArticle>
      <ModalBox
        title="Confirm Deletion"
        isOpen={isModalOpen}
        onRequestClose={() => setModalOpen(false)}
      >
        <p>Are you sure you want to delete this article?</p>
      </ModalBox>
    </Layout>
  );
};

PostPage.getInitialProps = async (ctx) => {
  const { slug } = ctx.query;

  const response = await fetch(
    `https://strapi.christopherleemiller.me/articles?slug=${slug}`
  );
  const data = await response.json();

  if (data.length < 1 || data == undefined) {
    ctx?.res?.writeHead(301, { Location: "/404" });
    ctx?.res?.end();
    return { blog_post: {} };
  } else {
    return { blog_post: data[0] };
  }
};

export default PostPage;
