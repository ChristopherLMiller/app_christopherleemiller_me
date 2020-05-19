import ReactMarkdown from "react-markdown";
//import { useQuery } from "react-apollo";
import Link from "next/link";
//import { useRouter } from "next/router";
import Card from "components/Card";
import { FullArticle } from "components/articles/Full";
//import { ARTICLES_QUERY } from "utils/queries";
import { Layout } from "components/layout/PageLayout";
import { iArticle } from "utils/queries/articles";
//import { Loader } from "components/elements/Loader";
import { NextPage } from "next";

const title = `From My Desk`;
const description = `Archives concerning all matters web development and beyond`;

interface iPostPage {
  blog_post: iArticle["article"];
}

const PostPage: NextPage<iPostPage> = ({ blog_post }) => {
  return (
    <Layout meta={{ title: title, description: description, useSEO: false }}>
      <FullArticle article={blog_post}>
        <ReactMarkdown source={blog_post.content} escapeHtml={false} />
      </FullArticle>
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
