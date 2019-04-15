import Card from '../components/Card';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import NextSEO from 'next-seo';
import React from 'react';
import { separator, siteTitle } from '../config';

const title = 'Contact Me';
const description =
  'How to reach me with any comments, questions, and concerns regarding anything you see here!';

const ContactPage = () => (
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
        <p>Form will be inserted here</p>
      </Card>
    </main>
    <Footer />
  </>
);

export default ContactPage;
