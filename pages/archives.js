import React from 'react';
import NextSEO from 'next-seo';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { perPage } from '../config';

import Card from '../components/card';

const ALL_ARTICLES_QUERY = gql`
  query ALL_ARTICLES_QUERY($start: Int = 0, $limit: Int = 10) {
    articles(limit: $limit, start: $start, sort: "createdAt:DESC") {
      slug
      title
      content
      createdAt
      user {
        username
      }
      comments(sort: "ASC") {
        text
        createdAt
        user {
          username
        }
      }
      categories {
        slug
        title
      }
      tags {
        slug
        title
      }
    }
  }
`;

class Archives extends React.Component {
  static propTypes = {
    page: PropTypes.number,
  };

  render() {
    return (
      <>
        <NextSEO
          config={{
            title: 'ChristopherLeeMiller - Archives',
            description: 'Archives Home Page',
            openGraph: {
              title: 'Archives',
              description: 'Archives Home Page',
            },
          }}
        />
        <Header title="Archives" />

        <Query
          query={ALL_ARTICLES_QUERY}
          variables={{
            skip: this.props.page * perPage - perPage,
            perPage,
          }}
        >
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            return (
              <main>
                {data.articles.map(article => (
                  <Card
                    key={article.slug}
                    title={article.title}
                    content={article.content}
                  />
                ))}
              </main>
            );
          }}
        </Query>
        <Footer />
      </>
    );
  }
}

export default Archives;
