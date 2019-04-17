import Card from '../components/Card';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import NextSEO from 'next-seo';
import Pagination from '../components/articles/Pagination';
import React, { SFC } from 'react';
import { ALL_MODELS_QUERY, MODEL_PAGINATION_QUERY } from '../utils/query';
import { PER_PAGE, SEPARATOR, SITE_TITLE } from '../config';
import { Query } from 'react-apollo';

const title = 'Models';
const description = 'Whether it plane, car or tank, its all here!';

interface ModelsPageTypes {
  query: {
    page: number,
  }
}

const GalleriesPage: SFC<ModelsPageTypes> = ({ query }) => (
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
      <Query query={ALL_MODELS_QUERY} variables={{ start: query.page * PER_PAGE - PER_PAGE, limit: PER_PAGE }}>
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
            <>
              {data.models.map(model => (
                <p>{model.title}</p>
              ))}
            </>
          );
        }}
      </Query>
      <Pagination page={query.page} query={MODEL_PAGINATION_QUERY} />
    </main>
    <Footer />
  </>
);

export default GalleriesPage;
