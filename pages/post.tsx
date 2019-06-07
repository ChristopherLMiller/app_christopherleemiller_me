import Markdown from 'markdown-to-jsx';
import React, { SFC } from 'react';
import Router from 'next/router';
import { Query } from 'react-apollo';
import Card from '../components/Card';
import { FullArticle } from '../components/articles/Full';
import { ARTICLES_QUERY } from '../utils/query';
import { withLayout } from '../components/layout/Layout';
import { Main } from '../styles/Themes';

const title = `From My Desk`;
const description = `Archives concerning all matters web development and beyond`;

interface PostPageTypes {
  query: {
    slug: string;
  };
}

const PostPage: SFC<PostPageTypes> = ({ query }) => (
  <Main>
    <Query query={ARTICLES_QUERY} variables={{ article_slug: query.slug }}>
      {({ data, error, loading }) => {
        if (loading) return <p>Loading...</p>;
        if (error) {
          console.log(error.message);
          return (
            <Card>
              <h3>Unable to fetch archive</h3>
              <p>{error.message}</p>
            </Card>
          );
        }

        // verify that we actually received an article, an empty array signifies no result.
        if (data.articles && data.articles.length > 0) {
          const article = data.articles[0];
          return (
            <FullArticle article={article}>
              <Markdown>{article.content}</Markdown>
            </FullArticle>
          );
        }

        // default to redirect to articles page
        Router.push(`/articles`);
        return null;
      }}
    </Query>
  </Main>
);
export default withLayout(PostPage, title, description);
