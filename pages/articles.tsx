import ReactMarkdown from 'react-markdown';
import { FunctionComponent } from 'react';
import { useQuery } from 'react-apollo';
import { useRouter } from 'next/router';
import { BriefArticle } from '../components/articles/Brief';
import Card from '../components/Card';
import { ARTICLES_QUERY } from '../utils/query';
import { iData } from '../components/articles/Types';
import { Loader } from '../components/elements/Loader';
import { PER_PAGE } from '../config';
import { truncate } from '../utils/functions/truncate';
import { Layout } from '../components/layout/PageLayout';

const title = `From My Desk`;
const description = `Archives concerning all matters web development and beyond`;

const ArticlesPage: FunctionComponent = () => {
  // get the router instance
  const router = useRouter();

  //const { category, tag } = router.query;

  // get the current page or default to 1
  let page = 1;
  if (router.query.page != undefined) {
    page = parseFloat(router.query.page.toString());
  }

  // set a default value for page if non provided
  const { loading, error, data } = useQuery<iData>(ARTICLES_QUERY, {
    variables: {
      start: page * PER_PAGE - PER_PAGE,
      limit: PER_PAGE,
    },
  });

  if (error) {
    console.error(`Fetch Error: ${error.message}`);

    return (
      <Layout meta={{ title, description, useSEO: true, path: `/articles` }}>
        <Card heading="Unable to load data">
          <hr />
          <h2>{error.message}</h2>
          <hr />
          <p>
            Sorry. Something happened and we can't seem to load data right now.
            Possibly you're offline and if not please let us know.  I'm sure the
            above text doesn't make any sense but it will help me figure out the problem.
          </p>
        </Card>
      </Layout>
    );
  }

  return (
    <Layout meta={{ title, description, useSEO: true, path: `/articles` }}>

      <Loader isLoading={loading} />
      {data !== undefined &&
        data.articles.map(article => (
          <BriefArticle article={article} key={article.id}>
            <ReactMarkdown source={truncate(article.content, 3)} />
          </BriefArticle>
        ))}
    </Layout>
  );
};

export default ArticlesPage;