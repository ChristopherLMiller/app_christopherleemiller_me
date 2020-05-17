import ReactMarkdown from "react-markdown";
//import { useQuery } from "react-apollo";
//import Link from "next/link";
//import { useRouter } from "next/router";
//import Card from "components/Card";
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
  console.log(blog_post);

  /*const router = useRouter();
  const { loading, error, data } = useQuery<iArticleData>(ARTICLES_QUERY, {
    variables: {
      where: {
        slug_contains: router.query.slug,
      },
    },
  });

  if (loading)
    return (
      <Layout meta={{ title, description, useSEO: false }}>
        <Loader isLoading={loading} />
      </Layout>
    );
  if (error) {
    console.error(`Fetch Error: ${error.message}`);

    return (
      <Layout meta={{ title, description, useSEO: false }}>
        <Card heading="Unable to load data">
          <h2>{error.message}</h2>
          <p>
            Sorry. Something happened and we can't seem to load data right now.
            Possibly you're offline and if not please let us know.
          </p>
        </Card>
      </Layout>
    );
  }

  if (blog_post !== undefined) {
    if (data.articles.length >= 1) {
      return (
        <Layout meta={{ title, description, useSEO: false }}>
          {data !== undefined &&
            data.articles.map((article) => (
              <FullArticle article={article}>
                <ReactMarkdown source={article.content} escapeHtml={false} />
              </FullArticle>
            ))}
        </Layout>
      );
    }
  }

  return (
    <Layout meta={{ title: title, description: description, useSEO: false }}>
      <Card heading="404 Article Not Found">
        <p>
          Sorry. We seem to have lost this article somewhere in the interwebs. I
          don't know what happened to it! Some gremlin somewhere must have
          snatched it on me, that or I just never wrote this one to begin with.
          Hmmmmm.
        </p>
        <hr />
        <Link href="/articles">
          <a>View All Articles</a>
        </Link>
      </Card>
    </Layout>
  );*/

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
  return { blog_post: data };
};

export default PostPage;
