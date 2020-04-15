import Card from '../components/Card';
import { useRouter } from 'next/router';
import { useAuth } from '../lib/hook/useAuth';
import { Layout } from '../components/layout/PageLayout';
const title = `Projects`;
const description = `Projects I have built over the years in all the languages and tech stacks I have used.`;

export const projectsAuth = {
  isSecure: true,
  permitted: {
    groups: ['Administrator']
  }
};

const ProjectsPage = () => {
  const auth = useAuth();

  if (auth.canAccessResource(projectsAuth)) {
    return (
      <Layout meta={{title, description, useSEO: true, path: `/projects`}}>

        <Card>
          <p>
            Plans for this page include a list of the programming projects i've done
            over the years, helped with etc.
      </p>
        </Card>

      </Layout>
    );
  } else {
    if (process.browser) {
      const router = useRouter();
      router.push('/unauthorized');
    }
    return null;
  }
}

export default ProjectsPage;