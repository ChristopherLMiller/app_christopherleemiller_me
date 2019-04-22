import Card from '../components/Card';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import NextSEO from 'next-seo';
import React, { SFC } from 'react';
import { MODELS_QUERY } from '../utils/query';
import { PER_PAGE, SEPARATOR, SITE_TITLE } from '../config';
import { Query } from 'react-apollo';
import ModelListing from '../components/models/ModelListing';
import { StyledModelListings } from '../components/styles/Models';

const title = 'Models';
const description = 'Whether it plane, car or tank, its all here!';

interface ModelsPageTypes {
  query: {
    page: number,
    scale: string,
    manufacturer: string,
    completed: string
  }
}

const ModelsPage: SFC<ModelsPageTypes> = ({ query }) => {

  // set a default value for page if non provided
  const page = parseFloat(query.page) || 1;

  return (
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
        <Query query={MODELS_QUERY} variables={{
          start: page * PER_PAGE - PER_PAGE,
          limit: PER_PAGE,
          scale: query.scale,
          manufacturer: query.manufacturer,
          completed: query.completed
        }}>
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
              <StyledModelListings>
                {data.models.map(model => (
                  <ModelListing key={model.id} model={model} />
                ))}
              </StyledModelListings>
            );
          }}
        </Query>
      </main>
      <Footer />
    </>
  );
}

export default ModelsPage;
