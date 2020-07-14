import { ModelTypes, MODELS_QUERY_STRING } from "utils/queries/models";
import { Layout } from "components/layout/PageLayout";
import { NextPage } from "next";
import { Model } from "components/models/Model";
import { queryData } from "utils/functions/queryData";

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

  const data = await queryData(ctx, MODELS_QUERY_STRING, { slug: slug });

  if (data?.models?.length < 1) {
    ctx?.res?.writeHead(301, { Location: "/404" });
    ctx?.res?.end();
    return { model: {} };
  } else {
    return { model: data.models[0] };
  }
};

export default ModelPage;
