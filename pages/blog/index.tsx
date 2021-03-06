import ReactMarkdown from "react-markdown";
import { FunctionComponent } from "react";
import { useQuery } from "react-apollo";
import { useRouter } from "next/router";
import { BriefArticle } from "components/articles/Brief";
import Card from "components/Card";
import { ARTICLES_QUERY } from "utils/queries";
import { Loader } from "components/elements/Loader";
import { PER_PAGE } from "config";
import { truncate, isDefined } from "utils/functions";
import { Layout } from "components/layout/PageLayout";
import { iArticleData } from "utils/queries/articles";

const title = `From My Desk`;
const description = `Archives concerning all matters web development and beyond`;

const BlogPage: FunctionComponent = () => {
  // get the router instance
  const router = useRouter();
  const { category, tag, page } = router.query;

  // set some variables based on the router query
  // @ts-ignore
  let pageNum = isDefined(page) ? parseFloat(page.toString()) : 1;

  let categoryFilter = isDefined(category) ? category : null;
  let tagFilter = isDefined(tag) ? tag : null;

  // object to store how to filter server side
  let where = {} as any;

  // check user role to see if allowed
  where.status = "PUBLISHED";

  if (categoryFilter) {
    where.categories = {} as any;
    where.categories.slug_contains = categoryFilter;
  }

  if (tagFilter) {
    where.tags = {} as any;
    where.tags.slug_contains = tagFilter;
  }

  // set a default value for page if non provided
  const { loading, error, data } = useQuery<iArticleData>(ARTICLES_QUERY, {
    variables: {
      start: pageNum * PER_PAGE - PER_PAGE,
      limit: PER_PAGE,
      where: where,
    },
  });

  return (
    <Layout meta={{ title, description, useSEO: true, path: `/articles` }}>
      {error && (
        <Card heading="Unable to load data">
          <hr />
          <h2>{error.message}</h2>
          <hr />
          <p>
            Sorry. Something happened and we can't seem to load data right now.
            Possibly you're offline and if not please let us know. I'm sure the
            above text doesn't make any sense but it will help me figure out the
            problem.
          </p>
        </Card>
      )}
      <Loader isLoading={loading} />
      {data?.articles.map((article) => (
        <BriefArticle article={article} key={article.id}>
          <ReactMarkdown source={truncate(article.content, 3)} />
        </BriefArticle>
      ))}
    </Layout>
  );
};

export default BlogPage;
