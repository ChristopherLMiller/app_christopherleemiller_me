import Card from '../components/Card';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import Markdown from 'markdown-to-jsx';
import NextSEO from 'next-seo';
import React, { SFC } from 'react';
import Router from 'next/router';
import { MODELS_QUERY } from '../utils/query';
import { Query } from 'react-apollo';
import { SEPARATOR, SITE_TITLE } from '../config';

const title = `From My Desk`;
const description =
  `Archives concerning all matters web development and beyond`;

interface ModelPageTypes {
  query: {
    slug: string,
  }
}

const ModelPage: SFC<ModelPageTypes> = ({ query }) => (
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
        query={MODELS_QUERY}
        variables={{ model_slug: query.slug }}
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

          console.log(data);
          // verify that we actually received an article, an empty array signifies no result.
          if (data.models && data.models.length > 0) {
            const model = data.models[0];
            return (
              <>
                <p>Content here</p>
              </>
            );
          }

          // default to redirect to articles page
          Router.push(`/models`);
          return null;
        }}
      </Query>
    </main>

    <Footer />
  </>
);
export default ModelPage;
