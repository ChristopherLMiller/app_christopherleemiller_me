import React from 'react';
import NextSEO from 'next-seo';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Card } from '../components/cards';

const title = 'Christopher Lee Miller - Contact Me';
const description =
  'How to reach me with any comments, questions, and concerns regarding anything you see here!';
class Contact extends React.Component {
  render() {
    return (
      <>
        <NextSEO
          config={{
            title,
            description,
            openGraph: {
              title,
              description,
            },
          }}
        />
        <Header title="Contact Me" />

        <main>
          <Card title="Contact Me">
            <p>Form will be inserted here</p>
          </Card>
        </main>
        <Footer />
      </>
    );
  }
}

export default Contact;
