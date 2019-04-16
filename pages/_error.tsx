import React from 'react';
import NextSEO from 'next-seo';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Card from '../components/Card';
import { SITE_TITLE, SEPARATOR } from '../config';

const title = 'Error';
const description = 'Uh-Oh! We broke something!';
class Error extends React.Component {
  render() {
    return (
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
            <p>Something broke an we don't know how to fix this! Yikes!</p>
          </Card>
        </main>
        <Footer />
      </>
    );
  }
}

export default Error;
