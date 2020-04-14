//import { ModelsFilters } from '../components/models/elements/Filters';
import { ModelsFilterContextProvider } from '../lib/context/ModelFiltersContext';
import { ModelListings } from '../components/models/ModelListings';

import { Layout } from '../components/layout/PageLayout';

const title = `Models`;
const description = `Whether it plane, car or tank, its all here!`;

const ModelsPage = () => (
  <Layout meta={{
    title,
    description,
    useSEO: true,
    path: `/models`,
    image: `clm_me/stash`
  }}>
    <ModelsFilterContextProvider>
      <ModelListings />
    </ModelsFilterContextProvider>
  </Layout>
);

export default ModelsPage;
