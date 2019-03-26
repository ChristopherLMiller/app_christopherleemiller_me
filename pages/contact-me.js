import React from 'react';
import NextSEO from 'next-seo';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Card from '../components/Card';
import { siteTitle, separator } from '../config';

const title = 'Contact Me';
const description =
  'How to reach me with any comments, questions, and concerns regarding anything you see here!';
class ContactPage extends React.Component {
  render() {
    return (
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
  }
}

export default ContactPage;
