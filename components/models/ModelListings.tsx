import { useQuery } from 'react-apollo';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import { iData } from '../../components/models/Types';
import { ModelListing } from '../../components/models/ModelListing';
import Card from '../../components/Card';
import { MODELS_QUERY_BRIEF } from '../../utils/query';
import { MODELS_PER_PAGE } from '../../config';
import { ModelsFilterContext } from '../../lib/context/ModelFiltersContext';
import { StyledModelListings } from '../../styles/Models';
import { hasPermission, roles } from '../../utils/functions/Auth';

const ModelListings = () => {
  const router = useRouter();

  // get the current page or default to 1
  let page = 1;
  if (router.query.page != undefined) {
    page = parseFloat(router.query.page.toString());
  }

  // grab the filter parameters from the context
  let { completed, scale, tag, company, sort } = useContext(
    ModelsFilterContext
  );

  let status = hasPermission({ groups: [roles.admin, roles.mod] }) ? null : 'PUBLISHED';

  if (tag === "all") tag = null;
  if (company === "all") company = null;
  if (scale === "all") scale = null;
  if (completed === "all") completed = null;

  // load the GQL Data
  const { loading, error, data } = useQuery<iData>(MODELS_QUERY_BRIEF, {
    variables: {
      where: {
        scale: {
          slug_contains: scale || null,
        },
        manufacturer: {
          slug_contains: company || null,
        },
        tags: {
          slug_contains: tag || null,
        },
        completed: completed || null,
        status: status,
      },
      start: page * MODELS_PER_PAGE - MODELS_PER_PAGE,
      limit: MODELS_PER_PAGE,
      sort,
    },
  });

  if (loading) return <p>Loading...</p>;

  if (error) {
    console.error(`Fetch Error: ${error.message}`);

    return (
      <Card heading="Unable to load data">
        <hr />
        <h2>{error.message}</h2>
        <hr />
        <p>
          Sorry. Something happened and we can't seem to load data right now.
          Possibly you're offline and if not please let us know.
        </p>
      </Card>
    );
  }

  if (data !== undefined && data.models.length >= 1) {
    return (
      <StyledModelListings>
        {data.models.map(model => (
          <ModelListing model={model} key={model.id} />
        ))}
      </StyledModelListings>
    );
  }

  return (
    <Card heading="No results found">
      <p>
        Nothing was found matching your parameters. Please broaden results or
        select other criteria.
      </p>
    </Card>
  );
};

export { ModelListings };
