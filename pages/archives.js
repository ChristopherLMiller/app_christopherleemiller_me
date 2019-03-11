import React from 'react';
import NextSEO from 'next-seo';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { perPage } from '../config';

const ALL_ARTICLES_QUERY = gql`
  query ALL_ARTICLES_QUERY($start: Int = ${perPage}, $limit: Int = 5) {
    articles(limit: $limit, start: $start) {
      slug
      title
      content
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
          }}
        >
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            return (
              <div>
                {data.items.map(item => (
                  <p>{item.title}</p>
                ))}
              </div>
            );
          }}
        </Query>
        <Footer />
      </>
    );
  }
}

export default Archives;
