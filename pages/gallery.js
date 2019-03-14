import React from 'react';
import NextSEO from 'next-seo';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

class Gallery extends React.Component {
  render() {
    return (
      <>
        <NextSEO
          config={{
            title: 'ChristopherLeeMiller - Galleries',
            description: 'A visual of all the things me!',
            openGraph: {
              title: 'Galleries',
              description: 'A visual of all the things me!',
            },
          }}
        />
        <Header title="Galleries" />

        <main>
          <p>This will be a highly dynamic page containing all my galleries</p>
        </main>
        <Footer />
      </>
    );
  }
}

export default Gallery;
