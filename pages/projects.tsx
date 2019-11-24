import Card from '../components/Card';
import { withLayout } from '../components/layout/withLayout';
import { Main } from '../styles/Generics';
//import { canAccessPage } from '../utils/functions/AuthChecker';
//import { useRouter } from 'next/router';

const title = `Projects`;
const description = `Projects I have built over the years in all the languages and tech stacks I have used.`;

export const auth = {
  isSecure: true,
  permitted: {
    groups: ['Administrator']
  }
};

const ProjectsPage = () => {
  //if (canAccessPage(auth)) {
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
  /*} else {
    if (process.browser) {
      const router = useRouter();
      router.push('/unauthorized');
    }
    return null;
  }*/
}

ProjectsPage.getInitialProps = async () => {
  console.log('getting initial props');
}

export default withLayout(ProjectsPage, {
  title, description, useSEO: true, path: `/projects`
});
