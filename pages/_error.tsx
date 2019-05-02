import { SFC } from 'react';
import Card from '../components/Card';
import { withLayout } from '../components/layout/Layout';

const title = `Error`;
const description = `Uh-Oh! We broke something!`;

interface ErrorPageTypes {
  props: object;
}
const ErrorPage: SFC<ErrorPageTypes> = ({ props }) => (
  <main>
    <Card>
      <p>Something broke an we don't know how to fix this! Yikes!</p>
    </Card>
  </main>
);

export default withLayout(ErrorPage, title, description, `/404`);
