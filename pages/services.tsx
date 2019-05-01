import Card from '../components/Card';
import { withLayout } from '../components/layout/Layout';

const title = `Services`;
const description = `Services that I offer`;

const ServicesPage = () => (
  <main>
    <Card>
      <p>
        Content will appear here of all the services that i offer, this include
        coding, maintenance, and even backups/updates for clients.
      </p>
    </Card>
  </main>
);
export default withLayout(ServicesPage, title, description);
