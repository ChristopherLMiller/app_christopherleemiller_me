import Markdown from 'markdown-to-jsx';
import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import Card from '../components/Card';
import { ARTICLES_QUERY } from '../utils/query';
import { FullArticle } from '../components/articles/Full';
import { withLayout } from '../components/layout/Layout';

const title = `Privacy Policy`;
const description = `My policies regarding your privacy and safety`;

const PrivacyPolicyPage = () => (
  <main>
    <Query
      query={ARTICLES_QUERY}
      variables={{ article_slug: `privacy-policy`, published: false }}
    >
      {({ data, error, loading }) => {
        if (loading) return <p>Loading...</p>;
        if (error) {
          console.log(error.message);
          return (
            <Card>
              <h3>Unable to fetch data, possibly offline?</h3>
              <p>{error.message}</p>
            </Card>
          );
        }

        return (
          <Fragment>
            <FullArticle article={data.articles[0]} commentsEnabled={false}>
              <Markdown>{data.articles[0].content}</Markdown>
            </FullArticle>
          </Fragment>
        );
      }}
    </Query>
  </main>
);

export default withLayout(PrivacyPolicyPage, title, description);
