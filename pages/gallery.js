import React from 'react';
import NextSEO from 'next-seo';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Card from '../components/Card';

const title = 'Christopher Lee Miller - Galleries';
const description = 'A visual of all the things me!';
class Gallery extends React.Component {
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
        <Header title="Galleries" />

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

export default Gallery;
