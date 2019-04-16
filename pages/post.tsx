import Card from '../components/Card';
import Footer from '../components/layout/Footer';
import FullArticle from '../components/articles/Full';
import Header from '../components/layout/Header';
import Markdown from 'markdown-to-jsx';
import NextSEO from 'next-seo';
import React, { SFC } from 'react';
import Router from 'next/router';
import { ARTICLE_QUERY } from '../utils/query';
import { Query } from 'react-apollo';
import { SEPARATOR, SITE_TITLE } from '../config';

const title = `From My Desk`;
const description =
  `Archives concerning all matters web development and beyond`;

interface PostPageTypes {
  query: {
    slug: string,
  }
}

const PostPage: SFC<PostPageTypes> = ({ query }) => (
  <>
    <NextSEO
      config={{
        title: `${SITE_TITLE}${SEPARATOR}${title}`,
        description,
        openGraph: {
          title: `${SITE_TITLE}${SEPARATOR}${title}`,
          description,
        },
      }}
    />
    <Header title={title} description={description} />

    <main>
      <Query
        query={ARTICLE_QUERY}
        variables={{ slug: query.slug }}
      >
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
              <>
                <FullArticle article={article}>
                  <Markdown>{article.content}</Markdown>
                </FullArticle>
              </>
            );
          }

          // default to redirect to articles page
          Router.push(`/articles`);
          return null;
        }}
      </Query>
    </main>

    <Footer />
  </>
);
export default PostPage;
