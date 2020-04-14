import Card from '../components/Card';
import { FC } from 'react';
import { Layout } from '../components/layout/PageLayout';

const title = `Error`;
const description = `Uh-Oh! We broke something!`;

interface ErrorPageTypes {
  props: object;
}
const ErrorPage: FC<ErrorPageTypes> = ({ props }) => {

  return (
    <Layout meta={{ title, description, useSEO: true, path: `/404` }}>
      <Card heading="Something isn't right.">
        <p>Something broke an we don't know how to fix this! Yikes!</p>
        <p>{props}</p>
      </Card>
    </Layout>
  );
}

export default ErrorPage;
