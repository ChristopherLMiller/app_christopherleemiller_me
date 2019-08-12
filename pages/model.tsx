import useOnlineStatus from '@rehooks/online-status';
import React, { SFC } from 'react';
import Router from 'next/router';
import { Query } from 'react-apollo';
import { withLayout } from '../components/layout/Layout';
import { MODELS_QUERY } from '../utils/query';
import Card from '../components/Card';
import { Model } from '../components/models/Model';
import { Main } from '../styles/Generics';
import { ModelTypes } from '../components/models/Types';

const title = `Models`;
const description = `Whether it plane, car or tank, its all here!`;

interface ModelPageTypes {
  query: {
    slug: string;
  };
}

interface iData {
  [key: string]: Array<ModelTypes[`model`]>;
}
const ModelPage: SFC<ModelPageTypes> = ({ query }) => {
  const onlineStatus = useOnlineStatus();

  return (
    <Main>
      {onlineStatus && (
        <Query<iData>
          query={MODELS_QUERY}
          variables={{ model_slug: query.slug }}
          notifyOnNetworkStatusChange
        >
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
            if (data !== undefined) {
              if (data.models && data.models.length > 0) {
                return data.models.map(model => (
                  <Model model={model} key={model.id} />
                ));
              }
            } else {
              Router.push(`/models`);
              return null;
            }
          }}
        </Query>
      )}

      {!onlineStatus && (
        <Card heading="Internet Offline">
          <p>Unable to connect to the internet. Please try again</p>
        </Card>
      )}
    </Main>
  );
};
export default withLayout(ModelPage, title, description);
