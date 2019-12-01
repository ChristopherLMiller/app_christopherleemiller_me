import Card from '../components/Card';
import { withLayout } from '../components/layout/withLayout';
import { Main } from '../styles/Generics';
import Link from 'next/link';

const title = `Not Authorized`;
const description = `This page has been locked out.`;

const UnauthorizedPage = () => (
  <Main>
    <Card heading="Uh oh. You're not authorized!">
      <p>
        Sorry but you can't view this page, it might be an error.  It might also be on purpose.  If you feel this in error please contact me.
      </p>
      <hr />
      <Link href="/"><a>Return Home</a></Link>
    </Card>
  </Main>
);


export default withLayout(UnauthorizedPage, {
  title, description, useSEO: false, path: `/unauthorized`
});
