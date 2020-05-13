import Card from "components/Card";
import { Layout } from "components/layout/PageLayout";

const title = `Services`;
const description = `Services that I offer`;

const ServicesPage = () => {
  return (
    <Layout meta={{ title, description, useSEO: true, path: `/services` }}>
      <Card>
        <p>
          Content will appear here of all the services that I offer, this
          include coding, maintenance, and even backups/updates for clients.
        </p>
      </Card>
    </Layout>
  );
};
export default ServicesPage;
