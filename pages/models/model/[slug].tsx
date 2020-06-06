import { ModelTypes } from "utils/queries/models";
import { Layout } from "components/layout/PageLayout";
import { NextPage } from "next";
import { Model } from "components/models/Model";

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
  const response = await fetch(
    `https://strapi.christopherleemiller.me/models?slug=${slug}`
  );
  const data = await response.json();

  if (data.length < 1 || data == undefined) {
    ctx?.res?.writeHead(301, { Location: "/404" });
    ctx?.res?.end();
    return { model: {} };
  } else {
    return { model: data[0] };
  }
};

export default ModelPage;
