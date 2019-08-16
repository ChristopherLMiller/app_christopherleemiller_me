import ReactMarkdown from 'react-markdown';
import React, { SFC } from 'react';
import { useQuery } from 'react-apollo';
import { BriefArticle } from '../components/articles/Brief';
import Card from '../components/Card';
import { ARTICLES_QUERY } from '../utils/query';
import { withLayout } from '../components/layout/Layout';
import { Pagination } from '../components/Pagination';
import { Main } from '../styles/Generics';
import { iData } from '../components/articles/Types';
import { PER_PAGE } from '../config';

const title = `From My Desk`;
const description = `Archives concerning all matters web development and beyond`;

interface ArticlesPageTypes {
  query: {
    page: string;
    category: string;
    tag: string;
  };
}

const ArticlesPage: SFC<ArticlesPageTypes> = ({ query }) => {
  // set a default value for page if non provided
  const page = parseFloat(query.page) || 1;
  const { loading, error, data } = useQuery<iData>(ARTICLES_QUERY, {
    variables: {
      start: page * PER_PAGE - PER_PAGE,
      limit: PER_PAGE,
      category: query.category,
      tag: query.tag,
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
          <h2>{error.message}</h2>
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

export default withLayout(ArticlesPage, title, description, `/articles`);
