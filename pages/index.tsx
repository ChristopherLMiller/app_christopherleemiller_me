import Card from "components/Card";
import { Layout } from "components/layout/PageLayout";
import { Grid } from "components/elements/GridLayout";
import { LatestPosts } from "components/articles/LatestPosts";
import { NewestModels } from "components/models/NewestModels";
import { NewestGalleries } from "components/gallery/NewestGalleries";

const title = `Home`;
const description = `Programmer.  Amateur Designer. Model Enthusiast.`;

const IndexPage = () => {
  return (
    <Layout
      meta={{
        title,
        description,
        useSEO: true,
        path: `/`,
      }}
    >
      <Grid columns={1} gap="50px">
        <Card heading="Welcome">
          <p>
            Please excuse the mess while I'm remodeling. Many great things are
            in progress and will appear here as they are built.
          </p>
          <p>
            If you want to enjoy what I have to offer so far though go ahead and
            have a look around as I've got many pieces in place, nothing
            compared to what I have to go yet though.
          </p>
          <p>
            If you find any errors or problems you can submit an issue on
            GitHub, or reach me at one of the other places in the sidebar on the
            left.
          </p>
        </Card>
      </Grid>
      <Grid columns={3} gap="50px">
        <LatestPosts />
        <NewestGalleries />
        <NewestModels />
      </Grid>
    </Layout>
  );
};

export default IndexPage;
