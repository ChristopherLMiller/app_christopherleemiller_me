import { ModelTypes, MODELS_QUERY_STRING } from "utils/queries/models";
import { Layout } from "components/layout/PageLayout";
import { NextPage } from "next";
import { Model } from "components/models/Model";
import { GRAPHQL_ENDPOINT } from "config";
import { parseCookies } from "nookies";

const title = `Models`;
const description = `Whether it plane, car or tank, its all here!`;

interface iModelPage {
  model: ModelTypes["model"];
}

const ModelPage: NextPage<iModelPage> = ({ model }) => {
  return (
    <Layout meta={{ title, description, useSEO: false }}>
      <Model model={model} />
    </Layout>
  );
};

ModelPage.getInitialProps = async (ctx) => {
  const { slug } = ctx.query;
  const cookies = parseCookies(ctx);

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: MODELS_QUERY_STRING,
      variables: { where: { slug: slug } },
    }),
  };

  // inject the bearer token if its present
  if (cookies?.token) {
    // @ts-ignore
    options.headers["Authorization"] = `Bearer ${cookies.token}`;
  }

  const response = await fetch(GRAPHQL_ENDPOINT, options);
  const data = await response.json();

  if (data?.data?.models?.length < 1) {
    ctx?.res?.writeHead(301, { Location: "/404" });
    ctx?.res?.end();
    return { model: {} };
  } else {
    return { model: data.data.models[0] };
  }
};

export default ModelPage;
