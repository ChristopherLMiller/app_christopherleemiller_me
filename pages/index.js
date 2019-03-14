import React from 'react';
import NextSEO from 'next-seo';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

class Index extends React.Component {
  render() {
    return (
      <>
        <NextSEO
          config={{
            title: 'ChristopherLeeMiller - Home',
            description: 'Where I came from and what I do now',
            openGraph: {
              title: 'About Me',
              description: 'Where I came from and what I do now',
            },
          }}
        />
        <Header title="Christopher Lee Miller" />
        <main>
          <p>Home Page</p>
        </main>
        <Footer />
      </>
    );
  }
}

export default Index;
