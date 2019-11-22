import Link from 'next/link';
import React, { SFC } from 'react';
import { Query } from 'react-apollo';
import { useRouter } from 'next/router';
import { withLayout } from '../components/layout/withLayout';
import { MODELS_QUERY } from '../utils/query';
import Card from '../components/Card';
import { Model } from '../components/models/Model';
import { Main } from '../styles/Generics';
import { iData } from '../components/models/Types';
import { getAuth } from '../utils/functions/AuthChecker';

const title = `Models`;
const description = `Whether it plane, car or tank, its all here!`;

const ModelPage: SFC = () => {
  getAuth();
  const router = useRouter();

  console.log(router);

  return (
    <Main>
      <Query<iData>
        query={MODELS_QUERY}
        variables={{
          where: {
            slug_contains: router.query.slug,
          },
        }}>
        {({ loading, data, error }: any) => {
          if (loading) {
            return (
              <p>Loading...</p>
            )
          }

          // log an error and show something to the user
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

          // data is good!
          if (data !== undefined) {
            if (data.models.length >= 1) {
              return (
                <Main>
                  {data.models.map((model: any) => (
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
        }}
      </Query>
    </Main >
  )
};
export default withLayout(ModelPage, { title, description, useSEO: false });
