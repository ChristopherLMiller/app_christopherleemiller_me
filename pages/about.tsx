import { Layout } from "components/layout/PageLayout";
import { NextSeo } from "next-seo";
import { SEPARATOR, SITE_TITLE } from "config";
//import ReactMarkdown from "react-markdown";
import { StyledContentBlock } from "components/elements/ContentBlock";
import { StyledArticle } from "styles/Articles";

const AboutMarkdown = require("data/pages/about.mdx").default;

const title = `About Me`;
const description = `Where I came from and what I do now`;

const AboutPage = () => (
  <Layout meta={{ title, description, useSEO: true, path: `/about` }}>
    <NextSeo
      title={`${SITE_TITLE}${SEPARATOR}${title}`}
      description={description}
      openGraph={{
        title: `${SITE_TITLE}${SEPARATOR}${title}`,
        description,
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
        type: "article",
        article: {
          authors: ["Chris Miller"],
          modifiedTime: "2020-05-20",
          publishedTime: "2020-05-20",
        },
      }}
    />
    <StyledArticle>
      <StyledContentBlock>
        <AboutMarkdown />
      </StyledContentBlock>
    </StyledArticle>
  </Layout>
);

export default AboutPage;
