import { SFC } from 'react';
import Card from '../components/Card';
import { withLayout } from '../components/layout/Layout';
import { Main } from '../styles/themes';

const title = `Error`;
const description = `Uh-Oh! We broke something!`;

interface ErrorPageTypes {
  props: object;
}
const ErrorPage: SFC<ErrorPageTypes> = ({ props }) => (
  <Main>
    <Card>
      <p>Something broke an we don't know how to fix this! Yikes!</p>
      <p>{props}</p>
    </Card>
  </Main>
);

export default withLayout(ErrorPage, title, description, `/404`);
