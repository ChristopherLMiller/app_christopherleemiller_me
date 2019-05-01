import React from 'react';
import Card from '../components/Card';
import { withLayout } from '../components/layout/Layout';

const title = `Error`;
const description = `Uh-Oh! We broke something!`;
const ErrorPage = ({ props }) => (
  <main>
    <Card>
      <p>Something broke an we don't know how to fix this! Yikes!</p>
    </Card>
  </main>
);

export default withLayout(ErrorPage, title, description);
