import React from 'react';
import NextSEO from 'next-seo';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Card from '../components/Card';
import { siteTitle, separator } from '../config';

const title = 'Galleries';
const description = 'A visual of all the things me!';
class GalleriesPage extends React.Component {
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
            <p>
              This will be a highly dynamic page containing all my galleries
            </p>
          </Card>
        </main>
        <Footer />
      </>
    );
  }
}

export default GalleriesPage;
