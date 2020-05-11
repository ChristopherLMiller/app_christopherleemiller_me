import Card from "components/Card";
import Link from "next/link";
import { Layout } from "components/layout/PageLayout";

const title = `Not Authorized`;
const description = `This page has been locked out.`;

const UnauthorizedPage = () => (
  <Layout
    meta={{
      title,
      description,
      useSEO: false,
      path: `/unauthorized`,
    }}
  >
    <Card heading="Uh oh. You're not authorized!">
      <p>
        Sorry but you can't view this page, it might be an error. It might also
        be on purpose. If you feel this in error please contact me.
      </p>
      <hr />
      <Link href="/">
        <a>Return Home</a>
      </Link>
    </Card>
  </Layout>
);

export default UnauthorizedPage;
