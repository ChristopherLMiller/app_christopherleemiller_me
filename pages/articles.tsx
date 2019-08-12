import ReactMarkdown from 'react-markdown';
import React, { SFC } from 'react';
import { Query } from 'react-apollo';
import { BriefArticle } from '../components/articles/Brief';
import Card from '../components/Card';
import { ARTICLES_QUERY } from '../utils/query';
import { PER_PAGE } from '../config';
import { withLayout } from '../components/layout/Layout';
import { Pagination } from '../components/Pagination';
import { Main } from '../styles/Generics';
import { ArticleTypes } from '../components/articles/Types';

const title = `From My Desk`;
const description = `Archives concerning all matters web development and beyond`;

interface Data {
  [key: string]: Array<ArticleTypes["article"]>;
}
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

  return (
    <Main>
      <Query<Data>
        query={ARTICLES_QUERY}
        variables={{
          start: page * PER_PAGE - PER_PAGE,
          limit: PER_PAGE,
          category: query.category,
          tag: query.tag,
        }}
      >
        {({ data, error, loading }) => {
          if (loading) return <p>Loading...</p>;
          if (error) {
            console.log(`Fetch Error: ${error}`);
            return (
              <Card>
                <h3>Unable to fetch archives</h3>
                <p>{error.message}</p>
              </Card>
            );
          }

          return (
            <React.Fragment>
              {data !== undefined &&
                data.articles.map(article => (
                  <BriefArticle article={article} key={article.id}>
                    <ReactMarkdown source={article.seo_description} />
                  </BriefArticle>
                ))}
            </React.Fragment>
          );
        }}
      </Query>
      <Pagination page={page} content_type="articles" />
    </Main>
  );
};

export default withLayout(ArticlesPage, title, description, `/articles`);
