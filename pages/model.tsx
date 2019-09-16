import Link from 'next/link';
import React, { SFC } from 'react';
import { useQuery } from 'react-apollo';
import { withLayout } from '../components/layout/withLayout';
import { MODELS_QUERY } from '../utils/query';
import Card from '../components/Card';
import { Model } from '../components/models/Model';
import { Main } from '../styles/Generics';
import { iData } from '../components/models/Types';

const title = `Models`;
const description = `Whether it plane, car or tank, its all here!`;

interface ModelPageTypes {
  query: {
    slug: string;
  };
}

const ModelPage: SFC<ModelPageTypes> = ({ query }) => {
  const { loading, error, data } = useQuery<iData>(MODELS_QUERY, {
    variables: {
      model_slug: query.slug,
    },
    ssr: true,
  });

  if (loading)
    return (
      <Main>
        <p>Loading...</p>
      </Main>
    );
  if (error) {
    console.error(`Fetch Error: ${error.message}`);

    return (
      <Main>
        <Card heading="Unable to load data">
          <h2>{error.message}</h2>
          <p>
            Sorry. Something happened and we can't seem to load data right now.
            Possibly you're offline and if not please let us know.
          </p>
        </Card>
      </Main>
    );
  }

  if (data !== undefined) {
    if (data.models.length >= 1) {
      return (
        <Main>
          {data.models.map(model => (
            <Model model={model} key={model.id} />
          ))}
        </Main>
      );
    }
  }

  return (
    <Main>
      <Card heading="404 Model Not Found.">
        <p>
          Sorry. We seem to have lost this model somewhere in the interwebs. I
          don't know what happened to it! Some gremlin somewhere must have
          snatched it on me, that or I just never built this model to begin
          with. Hmmmmm.
        </p>
        <hr />
        <Link href="/models">
          <a>View All Models</a>
        </Link>
      </Card>
    </Main>
  );
};
export default withLayout(ModelPage, title, description, false);
