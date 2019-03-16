import React from 'react';
import NextSEO from 'next-seo';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Card } from '../components/cards';

const title = 'Christopher Lee Miller - Services';
const description = 'Services that I offer';

class Services extends React.Component {
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
        <Header title="Services" />

        <main>
          <Card title="Services">
            <p>Content will appear here of all the services that i offer</p>
          </Card>
        </main>
        <Footer />
      </>
    );
  }
}

export default Services;
