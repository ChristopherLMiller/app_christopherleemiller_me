import React, { Fragment } from 'react';
import { NextSeo } from 'next-seo';
import ReactMarkdown from 'react-markdown';
import { StyledContentBlock } from '../components/elements/ContentBlock';
import { withLayout } from '../components/layout/withLayout';
import { SITE_TITLE, SEPARATOR } from '../config';
import { StyledArticle } from '../styles/Articles';

const PrivacyPolicyMarkdown = require(`../data/privacy-policy.md`);

const title = `Privacy Policy`;
const description = `My policies regarding your privacy and safety`;

const PrivacyPolicyPage = () => (
  <Fragment>
    <NextSeo
      title={`${SITE_TITLE}${SEPARATOR}Post${SEPARATOR}Privacy Policy`}
      description="This privacy notice discloses the privacy practices for ChristopherLeeMiller.me. This privacy notice applies solely to information collected by this website."
      openGraph={{
        title: `${SITE_TITLE}${SEPARATOR}Post${SEPARATOR}Privacy Policy`,
        description: `This privacy notice discloses the privacy practices for ChristopherLeeMiller.me. This privacy notice applies solely to information collected by this website.`,
        url: `${process.env.SITE_URL}/post/privacy-policy`,
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
        <ReactMarkdown>{PrivacyPolicyMarkdown.default}</ReactMarkdown>
      </StyledContentBlock>
    </StyledArticle>
  </Fragment>
);

export default withLayout(
  PrivacyPolicyPage,
  title,
  description,
  true,
  `/privacy-policy`
);
