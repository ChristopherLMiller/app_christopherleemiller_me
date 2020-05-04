import { useQuery } from "react-apollo";
import { useContext } from "react";
import { useRouter } from "next/router";
import { iData } from "../../components/models/Types";
import { ModelListing } from "../../components/models/ModelListing";
import Card from "../../components/Card";
import { MODELS_QUERY_BRIEF } from "../../utils/queries";
import { MODELS_PER_PAGE } from "../../config";
import { ModelsFilterContext } from "../../lib/context/ModelFiltersContext";
import { StyledModelListings } from "../../styles/Models";
import { Loader } from "../elements/Loader";

const ModelListings = () => {
  const router = useRouter();

  // get the current page or default to 1
  let page = 1;
  if (router.query.page != undefined) {
    page = parseFloat(router.query.page.toString());
  }

  // grab the filter parameters from the context
  let { scale, tag, company, sort } = useContext(ModelsFilterContext);

  let status = "PUBLISHED";

  if (tag === "all") tag = null;
  if (company === "all") company = null;
  if (scale === "all") scale = null;

  // load the GQL Data
  const { loading, error, data } = useQuery<iData>(MODELS_QUERY_BRIEF, {
    variables: {
      where: {
        status: status,
      },
      start: page * MODELS_PER_PAGE - MODELS_PER_PAGE,
      limit: MODELS_PER_PAGE,
      sort,
    },
  });

  if (loading) return <Loader isLoading={loading} />;

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
        {data.models.map((model) => (
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
