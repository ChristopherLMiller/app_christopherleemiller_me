import Card from '../components/Card';
import { withLayout } from '../components/layout/withLayout';
import { Main } from '../styles/Generics';
import { useRouter } from 'next/router';
import { canAccessResource } from '../utils/functions/Auth';

const title = `Projects`;
const description = `Projects I have built over the years in all the languages and tech stacks I have used.`;

export const projectsAuth = {
  isSecure: true,
  permitted: {
    groups: ['Administrator']
  }
};

const ProjectsPage = () => {
  if (canAccessResource(projectsAuth)) {
    return (
      <Main>
        <Card>
          <p>
            Plans for this page include a list of the programming projects i've done
            over the years, helped with etc.
      </p>
        </Card>
      </Main>
    );
  } else {
    if (process.browser) {
      const router = useRouter();
      router.push('/unauthorized');
    }
    return null;
  }
}

export default withLayout(ProjectsPage, {
  title, description, useSEO: true, path: `/projects`
});
