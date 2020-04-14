import Link from 'next/link';
import { SFC } from 'react';
import { useQuery } from 'react-apollo';
import { useRouter } from 'next/router';
import { MODELS_QUERY } from '../../utils/query';
import Card from '../../components/Card';
import { Model } from '../../components/models/Model';
import { iData } from '../../components/models/Types';
import { Layout } from '../../components/layout/PageLayout';

const title = `Models`;
const description = `Whether it plane, car or tank, its all here!`;

const ModelPage: SFC = () => {
  const router = useRouter();
  const { loading, error, data } = useQuery<iData>(MODELS_QUERY, {
    variables: {
      where: {
        slug_contains: router.query.slug,
      },
    },

  });

  if (loading) {
    return (
      <Layout meta={{ title, description, useSEO: false }}>
        <p>Loading...</p>
      </Layout>
    );
  }

  if (error) {
    console.error(`Fetch Error: ${error.message}`);

    return (
      <Layout meta={{ title, description, useSEO: false }}>
        <Card heading="Unable to load data">
          <h2>{error.message}</h2>
          <p>
            Sorry. Something happened and we can't seem to load data right now.
            Possibly you're offline and if not please let us know.
          </p>
        </Card>
        </Layout>
    );
  }

  if (data !== undefined) {
    if (data.models.length >= 1) {
      return (
        <Layout meta={{ title, description, useSEO: false }}>
          {data.models.map(model => (
            <Model model={model} key={model.id} />
          ))}
          </Layout>
      );
    }
  }

  return (
    <Layout meta={{ title, description, useSEO: false }}>
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
      </Layout>
  );
};
export default ModelPage;