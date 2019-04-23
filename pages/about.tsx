import Card from '../components/Card';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import NextSEO from 'next-seo';
import React from 'react';
import { SEPARATOR, SITE_TITLE } from '../config';

const title = `About Me`;
const description = 'Where I came from and what I do now';

const AboutPage = () => (
  <>
    <NextSEO
      config={{
        title: `${SITE_TITLE}${SEPARATOR}${title}`,
        description,
        openGraph: {
          description,
          title: `${SITE_TITLE}${SEPARATOR}${title}`,
          url: `${process.env.SITE_URL}/about`,
        },
      }}
    />
    <Header title={title} description={description} />

    <main>
      <Card>
        <p>There is much more content to come, this is just placeholder for the time being. Please check back soon. For now feel free to check out my old site:</p>
        <a href="https://www.christopherleemiller.me">Old Site</a>
      </Card>
    </main>
    <Footer />
  </>
);

export default AboutPage;
