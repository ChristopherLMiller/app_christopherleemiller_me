import Card from '../components/Card';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import NextSEO from 'next-seo';
import { SEPARATOR, SITE_TITLE } from '../config';

const title = 'Projects';
const description =
  'Projects I have built over the years in all the languages and tech stacks I have used.';

const ProjectsPage = () => (
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
        <p>
          There is much more content to come, this is just placeholder for
          the time being. Please check back soon. For now feel free to check
          out my old site:
            </p>
        <a href="https://www.christopherleemiller.me">Old Site</a>
      </Card>
    </main>
    <Footer />
  </>
);

export default ProjectsPage;
