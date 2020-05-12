import Card from "components/Card";
import { useRouter } from "next/router";
import { Layout } from "components/layout/PageLayout";
const title = `Projects`;
const description = `Projects I have built over the years in all the languages and tech stacks I have used.`;

export const ProjectsAuth = {
  isSecure: true,
  permittedGroups: {
    groups: [roles.admin],
  },
};

const ProjectsPage = () => {
  return (
    <Layout meta={{ title, description, useSEO: true, path: `/projects` }}>
      <Card>
        <p>
          Plans for this page include a list of the programming projects i've
          done over the years, helped with etc.
        </p>
      </Card>
    </Layout>
  );
};

export default ProjectsPage;
