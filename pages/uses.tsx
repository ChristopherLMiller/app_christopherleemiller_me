import { NextSeo } from "next-seo";
import { StyledContentBlock } from "components/elements/ContentBlock";
import { SITE_TITLE, SEPARATOR } from "config";
import { StyledArticle } from "styles/Articles";
import { Layout } from "components/layout/PageLayout";

const UsesMarkdown = require(`data/pages/uses.mdx`).default;

const title = `Uses`;
const description = `Tech and tools that I use`;

const UsesPage = () => (
  <Layout
    meta={{
      title,
      description,
      useSEO: true,
      path: `/uses`,
    }}
  >
    <NextSeo
      title={`${SITE_TITLE}${SEPARATOR}Privacy Policy`}
      description="Web technologies, tools, and other things related to my development experience"
      openGraph={{
        title: `${SITE_TITLE}${SEPARATOR}Privacy Policy`,
        description: `Web technologies, tools, and other things related to my development experience`,
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/uses`,
        type: `article`,
        article: {
          authors: [`Chris Miller`],
          modifiedTime: `2019-01-01`,
          publishedTime: `2019-01-01`,
        },
      }}
    />
    <StyledArticle>
      <StyledContentBlock>
        <UsesMarkdown />
      </StyledContentBlock>
    </StyledArticle>
  </Layout>
);

export default UsesPage;
