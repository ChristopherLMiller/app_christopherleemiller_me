import React from 'react';
import NextSEO from 'next-seo';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { perPage } from '../config';
import Article from '../components/Article';

const title = 'Christopher Lee Miller - Archives';
const description = 'Archives Home Page';

const ALL_ARTICLES_QUERY = gql`
  query ALL_ARTICLES_QUERY($start: Int = 0, $limit: Int = 10) {
    articles(
      limit: $limit
      start: $start
      sort: "createdAt:DESC"
      where: { status: "published" }
    ) {
      slug
      title
      content
      featured_image
      status
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
            title,
            description,
            openGraph: {
              title,
              description,
            },
          }}
        />
        <Header title="From My Desk" />

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
                  <Article
                    key={article.slug}
                    title={article.title}
                    image={article.featured_image}
                    content={article.content}
                    user={article.user.username}
                    createdAt={article.createdAt}
                    categories={article.categories}
                    tags={article.tags}
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
