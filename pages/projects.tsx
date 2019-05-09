import Card from '../components/Card';
import { withLayout } from '../components/layout/Layout';

const title = `Projects`;
const description = `Projects I have built over the years in all the languages and tech stacks I have used.`;

const ProjectsPage = () => (
  <main>
    <Card>
      <p>
        There is much more content to come, this is just placeholder for the
        time being. Please check back soon. For now feel free to check out my
        old site:
      </p>
      <a href="https://www.christopherleemiller.me">Old Site</a>
    </Card>
  </main>
);

export default withLayout(ProjectsPage, title, description, `/projects`);
