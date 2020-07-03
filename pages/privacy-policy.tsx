import { NextSeo } from "next-seo";
import { StyledContentBlock } from "components/elements/ContentBlock";
import { SITE_TITLE, SEPARATOR } from "config";
import { StyledArticle } from "styles/Articles";
import { Layout } from "components/layout/PageLayout";

const PrivacyPolicyMarkdown = require(`data/pages/privacy-policy.mdx`).default;

const title = `Privacy Policy`;
const description = `My policies regarding your privacy and safety`;

const PrivacyPolicyPage = () => (
  <Layout
    meta={{
      title,
      description,
      useSEO: true,
      path: `/privacy-policy`,
    }}
  >
    <NextSeo
      title={`${SITE_TITLE}${SEPARATOR}${title}`}
      description="This privacy notice discloses the privacy practices for ChristopherLeeMiller.me. This privacy notice applies solely to information collected by this website."
      openGraph={{
        title: `${SITE_TITLE}${SEPARATOR}${title}`,
        description: `This privacy notice discloses the privacy practices for ChristopherLeeMiller.me. This privacy notice applies solely to information collected by this website.`,
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/privacy-policy`,
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
        <PrivacyPolicyMarkdown />
      </StyledContentBlock>
    </StyledArticle>
  </Layout>
);

export default PrivacyPolicyPage;
