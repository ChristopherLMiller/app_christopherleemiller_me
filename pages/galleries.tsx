import Card from '../components/Card';
import { useRouter } from 'next/router';
import { useAuth } from '../lib/hook/useAuth';
import { Layout } from '../components/layout/PageLayout';

const title = `Galleries`;
const description = `A visual of all the things me!`;

export const galleriesAuth = {
  isSecure: true
};

const GalleriesPage = () => {
  const auth = useAuth();

  if (auth.canAccessResource(galleriesAuth)) {
    return (
      <Layout meta={{
        title,
        description,
        useSEO: true,
        path: `/galleries`
      }}>

        <Card>
          <p>This will be a highly dynamic page containing all my galleries</p>
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
export default GalleriesPage;