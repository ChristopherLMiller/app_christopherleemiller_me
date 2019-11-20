import React from 'react';
import { withLayout } from '../components/layout/withLayout';
import { ModelsFilters } from '../components/models/elements/Filters';
import { ModelsFilterContextProvider } from '../lib/context/ModelFiltersContext';
import { ModelListings } from '../components/models/ModelListings';
import { Main } from '../styles/Generics';

const title = `Models`;
const description = `Whether it plane, car or tank, its all here!`;

export const auth = {
  isSecure: false
};

const ModelsPage = () => (
  <Main>
    <ModelsFilterContextProvider>
      <ModelsFilters />
      <ModelListings />
    </ModelsFilterContextProvider>
  </Main>
);

export default withLayout(
  ModelsPage, {
  title,
  description,
  useSEO: true,
  path: `/models`,
  image: `clm_me/stash`
});
