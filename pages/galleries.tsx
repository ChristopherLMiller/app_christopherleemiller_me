import Card from '../components/Card';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import NextSEO from 'next-seo';
import React from 'react';
import { separator, siteTitle } from '../config';

const title = 'Galleries';
const description = 'A visual of all the things me!';
const GalleriesPage = () => (
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
          This will be a highly dynamic page containing all my galleries
            </p>
      </Card>
    </main>
    <Footer />
  </>
);

export default GalleriesPage;
