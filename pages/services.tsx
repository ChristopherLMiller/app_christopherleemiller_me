import Card from '../components/Card';
import { withLayout } from '../components/layout/withLayout';
import { Main } from '../styles/Generics';
import { canAccessPage } from '../utils/functions/AuthChecker';

const title = `Services`;
const description = `Services that I offer`;

const ServicesPage = () => {
  canAccessPage({ isSecure: false });
  return (
    <Main>
      <Card>
        <p>
          Content will appear here of all the services that i offer, this include
          coding, maintenance, and even backups/updates for clients.
      </p>
      </Card>
    </Main>
  );
}
export default withLayout(ServicesPage, { title, description, useSEO: true, path: `/services` });
