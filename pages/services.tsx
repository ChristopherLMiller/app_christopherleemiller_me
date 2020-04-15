import Card from '../components/Card';
import { useRouter } from 'next/router';
import { useAuth } from '../lib/hook/useAuth';
import { Layout } from '../components/layout/PageLayout';

const title = `Services`;
const description = `Services that I offer`;


export const servicesAuth = {
  isSecure: true,
  permitted: {
    groups: ['Administrator']
  }
};

const ServicesPage = () => {
  const auth = useAuth();

  if (auth.canAccessResource(servicesAuth)) {
    return (
      <Layout meta={{ title, description, useSEO: true, path: `/services` }} >
        <Card>
          <p>
            Content will appear here of all the services that I offer, this include
            coding, maintenance, and even backups/updates for clients.
        </p>
        </Card>
      </Layout>
    );
  } else {
    if (process.browser) {
      const router = useRouter();
      router.push('/unauthorized');
    }
    return null
  }
}
export default ServicesPage;