import { SFC } from 'react';
import Card from '../components/Card';
import { withLayout } from '../components/layout/withLayout';
import { Main } from '../styles/Generics';

const title = `Error`;
const description = `Uh-Oh! We broke something!`;

interface ErrorPageTypes {
  props: object;
}
const ErrorPage: SFC<ErrorPageTypes> = ({ props }) => {

  return (
    <Main>
      <Card heading="Something isn't right.">
        <p>Something broke an we don't know how to fix this! Yikes!</p>
        <p>{props}</p>
      </Card>
    </Main>
  );
}

export default withLayout(ErrorPage, { title, description, useSEO: true, path: `/404` });
