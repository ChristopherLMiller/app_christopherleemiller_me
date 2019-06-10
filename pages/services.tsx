import Card from '../components/Card';
import { withLayout } from '../components/layout/Layout';
import { Main } from '../styles/Themes';

const title = `Services`;
const description = `Services that I offer`;

const ServicesPage = () => (
  <Main>
    <Card>
      <p>
        Content will appear here of all the services that i offer, this include
        coding, maintenance, and even backups/updates for clients.
      </p>
    </Card>
  </Main>
);
export default withLayout(ServicesPage, title, description, `/services`);
