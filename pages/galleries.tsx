import Card from "../components/Card";
import { roles } from "../lib/hook/useAuth";
import { Layout } from "../components/layout/PageLayout";
import { GET_ALL_GALLERIES } from "../utils/query";
import { useQuery } from "react-apollo";
import { Loader } from "../components/elements/Loader";
import { isDefined } from "../utils/functions/isDefined";
import { Polaroid } from "../components/Polaroid";
import { Grid } from "../components/elements/GridLayout";

const title = `Galleries`;
const description = `A visual of all the things me!`;

export const GalleriesAuth = {
  isSecure: false,
  permittedGroups: {
    groups: [roles.admin, roles.mod],
  },
};

const GalleriesPage = () => {
  const { loading, error, data } = useQuery(GET_ALL_GALLERIES);

  return (
    <Layout
      meta={{
        title,
        description,
        useSEO: true,
        path: `/galleries`,
      }}
    >
      {error && (
        <Card heading="Unable to load data">
          <hr />
          <h2>{error.message}</h2>
          <hr />
          <p>
            Sorry. Something happened and we can't seem to load the data right
            now.
          </p>
        </Card>
      )}
      <Loader isLoading={loading} />
      <Grid columns={4} gap="30px">
        {isDefined(data) &&
          data.galleries.map((gallery: any) => (
            <Polaroid key={gallery.id} image={gallery.featured_image}>
              <p>{gallery.title}</p>
            </Polaroid>
          ))}
      </Grid>
    </Layout>
  );
};
export default GalleriesPage;
