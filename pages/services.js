import React from 'react';
import NextSEO from 'next-seo';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

class Services extends React.Component {
  render() {
    return (
      <>
        <NextSEO
          config={{
            title: 'ChristopherLeeMiller - Services',
            description: 'Services that I offer',
            openGraph: {
              title: 'Services',
              description: 'Services that I offer',
            },
          }}
        />
        <Header title="Services" />

        <p>Content will appear here of all the services that i offer</p>
        <Footer />
      </>
    );
  }
}

export default Services;
