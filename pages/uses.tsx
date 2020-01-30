import { NextSeo } from 'next-seo';
import ReactMarkdown from 'react-markdown';
import { StyledContentBlock } from '../components/elements/ContentBlock';
import { withLayout } from '../components/layout/withLayout';
import { SITE_TITLE, SEPARATOR } from '../config';
import { StyledArticle } from '../styles/Articles';
import { Main } from '../styles/Generics';

const UsesMarkdown = require(`../data/uses.md`);

const title = `Uses`;
const description = `Tech and tools that I use`;

const UsesPage = () => (
  <Main>
    <NextSeo
      title={`${SITE_TITLE}${SEPARATOR}Privacy Policy`}
      description="Web technologies, tools, and other things related to my development experience"
      openGraph={{
        title: `${SITE_TITLE}${SEPARATOR}Privacy Policy`,
        description: `Web technologies, tools, and other things related to my development experience`,
        url: `${process.env.SITE_URL}/uses`,
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
        <ReactMarkdown>{UsesMarkdown.default}</ReactMarkdown>
      </StyledContentBlock>
    </StyledArticle>
  </Main>
);

export default withLayout(
  UsesPage, {
  title,
  description,
  useSEO: true,
  path: `/uses`
});
