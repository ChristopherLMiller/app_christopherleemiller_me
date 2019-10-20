import ReactMarkdown from 'react-markdown';
import React, { SFC } from 'react';
import { useQuery } from 'react-apollo';
import { useRouter } from 'next/router';
import { BriefArticle } from '../components/articles/Brief';
import Card from '../components/Card';
import { ARTICLES_QUERY } from '../utils/query';
import { withLayout } from '../components/layout/withLayout';
import { Pagination } from '../components/Pagination';
import { Main } from '../styles/Generics';
import { iData } from '../components/articles/Types';
import { PER_PAGE } from '../config';

const title = `From My Desk`;
const description = `Archives concerning all matters web development and beyond`;

const ArticlesPage: SFC = () => {
  // get the router instance
  const router = useRouter();

  //const { category, tag } = router.query;

  // get the current page or default to 1
  let page = 1;
  if (router.query.page != undefined) {
    page = parseFloat(router.query.page.toString());
  }

  // set a default value for page if non provided
  // const page = parseFloat(router.query.page) || 1;
  const { loading, error, data } = useQuery<iData>(ARTICLES_QUERY, {
    variables: {
      start: page * PER_PAGE - PER_PAGE,
      limit: PER_PAGE,
      where: {
        published: true,

      },
    },
  });

  if (loading)
    return (
      <Main>
        <p>Loading...</p>
      </Main>
    );
  if (error) {
    console.error(`Fetch Error: ${error.message}`);

    return (
      <Main>
        <Card heading="Unable to load data">
          <hr />
          <h2>{error.message}</h2>
          <hr />
          <p>
            Sorry. Something happened and we can't seem to load data right now.
            Possibly you're offline and if not please let us know.
          </p>
        </Card>
      </Main>
    );
  }

  return (
    <Main>
      {data !== undefined &&
        data.articles.map(article => (
          <BriefArticle article={article} key={article.id}>
            <ReactMarkdown source={article.seo_description} />
          </BriefArticle>
        ))}
      <Pagination page={page} content_type="articles" />
    </Main>
  );
};

export default withLayout(ArticlesPage, title, description, true, `/articles`);
