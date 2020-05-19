import Card from "components/Card";
import { FC } from "react";
import { Layout } from "components/layout/PageLayout";
import { LeftAlign, UnorderedList } from "styles/Generics";

const title = `404`;
const description = `Ruh Roh.  We lost that page!`;

interface ErrorPageTypes {
  props: object;
}
const ErrorPage: FC<ErrorPageTypes> = ({ props }) => {
  return (
    <Layout meta={{ title, description, useSEO: true, path: `/404` }}>
      <Card
        heading="Ruh Roh.  We lost that page."
        actionLinks={[{ href: "/", title: "Home Page" }]}
      >
        <p>
          The page you have request has disappeared for whatever reaason.
          Probably because I'm terrible and change things a lot.
        </p>
        <LeftAlign>
          Perhaps you are here because:
          <UnorderedList>
            <li>The page has been moved</li>
            <li>The page no longer exists</li>
            <li>You were looking for more awesome airplanes and got lost</li>
            <li>You just really like 404 pages. Sorry to disappoint.</li>
          </UnorderedList>
        </LeftAlign>
        <p>{props}</p>
      </Card>
    </Layout>
  );
};

export default ErrorPage;
