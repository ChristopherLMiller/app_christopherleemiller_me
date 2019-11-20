import React from 'react';
import Card from '../components/Card';
import { withLayout } from '../components/layout/withLayout';
import { Main } from '../styles/Generics';
import { canAccessPage } from '../utils/functions/AuthChecker';

const title = `Galleries`;
const description = `A visual of all the things me!`;

export const auth = {
  isSecure: true
};

const GalleriesPage = () => {
  canAccessPage(auth);

  return (
    <Main>
      <Card>
        <p>This will be a highly dynamic page containing all my galleries</p>
      </Card>
    </Main>
  );
}
export default withLayout(
  GalleriesPage,
  {
    title,
    description,
    useSEO: true,
    path: `/galleries`
  });
