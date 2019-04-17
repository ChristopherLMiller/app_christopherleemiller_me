import Card from '../components/Card';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import NextSEO from 'next-seo';
import { SEPARATOR, SITE_TITLE } from '../config';

const title = 'Services';
const description = 'Services that I offer';

const ServicesPage = () => (
  <>
    <NextSEO
      config={{
        title: `${SITE_TITLE}${SEPARATOR}${title}`,
        description,
        openGraph: {
          title: `${SITE_TITLE}${SEPARATOR}${title}`,
          description,
        },
      }}
    />
    <Header title={title} description={description} />

    <main>
      <Card>
        <p>Content will appear here of all the services that i offer</p>
      </Card>
    </main>
    <Footer />
  </>
);
export default ServicesPage;
