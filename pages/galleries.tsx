import React from 'react';
import Card from '../components/Card';
import { withLayout } from '../components/layout/Layout';

const title = `Galleries`;
const description = `A visual of all the things me!`;
const GalleriesPage = () => (
  <main>
    <Card>
      <p>This will be a highly dynamic page containing all my galleries</p>
    </Card>
  </main>
);

export default withLayout(GalleriesPage, title, description, `/galleries`);
