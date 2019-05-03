import React, { SFC } from 'react';
import Router from 'next/router';
import { Query } from 'react-apollo';
import { withLayout } from '../components/layout/Layout';
import { MODELS_QUERY } from '../utils/query';
import Card from '../components/Card';
import { Model } from '../components/models/Model';

const title = `Models`;
const description = `Whether it plane, car or tank, its all here!`;

interface ModelPageTypes {
  query: {
    slug: string;
  };
}

const ModelPage: SFC<ModelPageTypes> = ({ query }) => (
  <main>
    <Query query={MODELS_QUERY} variables={{ model_slug: query.slug }}>
      {({ data, error, loading }) => {
        if (loading) return <p>Loading...</p>;
        if (error) {
          console.log(error.message);
          return (
            <Card>
              <h3>Unable to fetch data</h3>
              <p>{error.message}</p>
            </Card>
          );
        }

        // verify that we actually received an model, an empty array signifies no result.
        if (data.models && data.models.length > 0) {
          const model = data.models[0];
          return <Model model={model} />;
        }

        // default to redirect to articles page
        Router.push(`/models`);
        return null;
      }}
    </Query>
  </main>
);
export default withLayout(ModelPage, title, description);
