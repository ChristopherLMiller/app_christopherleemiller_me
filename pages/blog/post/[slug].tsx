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
  blog_post?: iArticle["article"];
  notFound?: boolean;
}

const PostPage: NextPage<iPostPage> = ({ blog_post, notFound }) => {
  return (
    <Layout meta={{ title: title, description: description, useSEO: false }}>
      {blog_post && (
        <FullArticle article={blog_post}>
          <ReactMarkdown source={blog_post.content} escapeHtml={false} />
        </FullArticle>
      )}
      {notFound && (
        <Card heading="404 Article Not Found">
          <p>
            Sorry. We seem to have lost this article somewhere in the interwebs.
            I don't know what happened to it! Some gremlin somewhere must have
            snatched it on me, that or I just never wrote this one to begin
            with. Hmmmmm.
          </p>
          <hr />
          <Link href="/articles">
            <a>View All Articles</a>
          </Link>
        </Card>
      )}
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
    return { notFound: true };
  } else {
    return { blog_post: data[0] };
  }
};

export default PostPage;
