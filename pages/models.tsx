import React, { SFC, useState, useEffect } from 'react';
import { useQuery } from 'react-apollo';
import { useRouter } from 'next/router';
import { withLayout } from '../components/layout/withLayout';
import Card from '../components/Card';
import { MODELS_QUERY_BRIEF } from '../utils/query';
import { MODELS_PER_PAGE } from '../config';
import { StyledModelListings, StyledModelPage } from '../styles/Models';
import { ModelsFilters } from '../components/models/elements/Filters';
import { Main } from '../styles/Generics';
import { iData } from '../components/models/Types';
import { ModelListing } from '../components/models/ModelListing';

const title = `Models`;
const description = `Whether it plane, car or tank, its all here!`;

const ModelsPage: SFC = () => {
  const router = useRouter();

  // grab query arguments we care about
  const { scale, company, tag, sort } = router.query;
  let completed = router.query.completed;

  // get the current page or default to 1
  let page = 1;
  if (router.query.page != undefined) {
    page = parseFloat(router.query.page.toString());
  }

  if (completed == `yes`) {
    completed = `true`;
  } else if (completed == `no`) {
    completed = `false`;
  }

  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 1000);
  });

  const { loading, error, data } = useQuery<iData>(MODELS_QUERY_BRIEF, {
    variables: {
      where: {
        scale: {
          slug_contains: scale || null,
        },
        manufacturer: {
          slug_contains: company || null,
        },
        tag: {
          slug_contains: tag || null,
        },
        completed: completed || null,
      },
      start: page * MODELS_PER_PAGE - MODELS_PER_PAGE,
      limit: MODELS_PER_PAGE,
      sort: sort,
    },
  });

  if (loading)
    return (
      <Main>
        <StyledModelPage>
          <ModelsFilters />
          <p>Loading...</p>
        </StyledModelPage>
      </Main>
    );
  if (error) {
    console.error(`Fetch Error: ${error.message}`);

    return (
      <Main>
        <StyledModelPage>
          <Card heading="Unable to load data">
            <hr />
            <h2>{error.message}</h2>
            <hr />
            <p>
              Sorry. Something happened and we can't seem to load data right
              now. Possibly you're offline and if not please let us know.
            </p>
          </Card>
        </StyledModelPage>
      </Main>
    );
  }

  if (data !== undefined && data.models.length >= 1) {
    return (
      <Main>
        <StyledModelPage>
          <ModelsFilters />
          <StyledModelListings
            pose={isOpen ? `visible` : `invisible`}
            initialPose="invisible"
          >
            {data.models.map(model => (
              <ModelListing model={model} key={model.id} />
            ))}
          </StyledModelListings>
        </StyledModelPage>
      </Main>
    );
  }

  return (
    <Main>
      <StyledModelPage>
        <ModelsFilters />
        <Card heading="No results found">
          <p>
            Nothing was found matching your parameters. Please broaden results
            or select other criteria.
          </p>
        </Card>
      </StyledModelPage>
    </Main>
  );
};

export default withLayout(
  ModelsPage,
  title,
  description,
  true,
  `/models`,
  `clm_me/stash`
);
