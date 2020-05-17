import Card from "components/Card";
import { FC } from "react";
import { Layout } from "components/layout/PageLayout";

const title = `404`;
const description = `Uh-Oh! We broke something!`;

interface ErrorPageTypes {
  props: object;
}
const ErrorPage: FC<ErrorPageTypes> = ({ props }) => {
  return (
    <Layout meta={{ title, description, useSEO: true, path: `/404` }}>
      <Card heading="Something isn't right.">
        <p>
          Seems that this page was lost in space, or the internet, it's hard to
          say really but its gone that much I know. If you feel this is in error
          please reach out to me and I'll attempt to find this page again.
        </p>
        <p>{props}</p>
      </Card>
    </Layout>
  );
};

export default ErrorPage;
