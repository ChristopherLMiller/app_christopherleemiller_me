import React from 'react';
import propTypes from 'prop-types';
import NextSEO from 'next-seo';
import Markdown from 'markdown-to-jsx';
import { Query } from 'react-apollo';
import Router from 'next/router';

import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Card from '../components/Card';
import FullArticle from '../components/articles/Full';

import { siteTitle, separator } from '../config';
import { ARTICLE_QUERY } from '../utils/query';

const title = `From My Desk`;
const description =
  `Archives concerning all matters web development and beyond`;

class PostPage extends React.Component {
  static propTypes = {
    query: propTypes.object,
  };

  render() {
    return (
      <>
        <NextSEO
          config={{
            title: `${siteTitle}${separator}${title}`,
            description,
            openGraph: {
              title: `${siteTitle}${separator}${title}`,
              description,
            },
          }}
        />
        <Header title={title} description={description} />

        <main>
          <Query
            query={ARTICLE_QUERY}
            variables={{ slug: this.props.query.slug }}
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
  }
}

export default PostPage;
