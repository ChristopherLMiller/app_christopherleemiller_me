import Card from '../components/Card';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import NextSEO from 'next-seo';
import React from 'react';
import { separator, siteTitle } from '../config';

const title = `About Me`;
const description = 'Where I came from and what I do now';

const AboutPage = () => (
  <>
    <NextSEO
      config={{
        title: `${siteTitle}${separator}${title}`,
        description,
        openGraph: {
          title: `${siteTitle}${separator}${title}`,
          description,
        },
      }}
    />
    <Header title={title} description={description} />

    <main>
      <Card>
        <p>
          There is much more content to come, this is just placeholder for
          the time being. Please check back soon. For now feel free to check
          out my old site:
            </p>
        <a href="https://www.christopherleemiller.me">Old Site</a>
      </Card>
    </main>
    <Footer />
  </>
);

export default AboutPage;
