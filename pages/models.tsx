import Card from '../components/Card';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import NextSEO from 'next-seo';
import React from 'react';
import { SEPARATOR, SITE_TITLE } from '../config';

const title = 'Models';
const description = 'Whether it plane, car or tank, its all here!';
const GalleriesPage = () => (
  <>
    <NextSEO
      config={{
        title: `${SITE_TITLE}${SEPARATOR}${title}`,
        description,
        openGraph: {
          title: `${SITE_TITLE}${SEPARATOR}${title}`,
          description,
        },
      }}
    />
    <Header title={title} description={description} />

    <main>
      <Card>
        <p>
          This will be a highly dynamic page containing all my models
            </p>
      </Card>
    </main>
    <Footer />
  </>
);

export default GalleriesPage;
