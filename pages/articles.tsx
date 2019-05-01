import Markdown from 'markdown-to-jsx';
import React, { SFC } from 'react';
import { Query } from 'react-apollo';
import { BriefArticle } from '../components/articles/Brief';
import Card from '../components/Card';
import { ARTICLES_QUERY } from '../utils/query';
import { PER_PAGE } from '../config';
import { withLayout } from '../components/layout/Layout';

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

  return (
    <main>
      <Query
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
              {data.articles.map(article => (
                <BriefArticle article={article} key={article.id}>
                  <Markdown>{article.seo_description}</Markdown>
                </BriefArticle>
              ))}
            </React.Fragment>
          );
        }}
      </Query>
    </main>
  );
};

export default withLayout(ArticlesPage, title, description);
